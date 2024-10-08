document.addEventListener('deviceready', onDeviceReady)

async function init() {
  if (!await initialize()) return
  setStatus("Ready")
}

async function startLiveness() {
  var response = await faceSdk.startLiveness({
    config: new LivenessConfig({
      skipStep: [LivenessSkipStep.ONBOARDING_STEP]
    }),
    notificationCompletion: (notification) => {
      console.log("LivenessStatus: " + notification.status)
    }
  })
  if (response.image == null) return
  setImage(response.image, ImageType.LIVE, 1)
  setLivenessStatus(response.liveness == LivenessStatus.PASSED ? "passed" : "unknown")
}

async function matchFaces() {
  if (image1 == null || image2 == null) {
    setStatus("Both images required!")
    return
  }
  setStatus("Processing...")
  var request = new MatchFacesRequest([image1, image2])
  var response = await faceSdk.matchFaces(request)
  var split = await faceSdk.splitComparedFaces(response.results, 0.75)
  var match = split.matchedFaces
  setSimilarityStatus("failed")
  if (match.length > 0)
    setSimilarityStatus((match[0].similarity * 100).toFixed(2) + "%")
  setStatus("Ready")
}

function clearResults() {
  setStatus("Ready")
  setSimilarityStatus("null")
  setLivenessStatus("null")
  resetImages()
  image1 = null
  image2 = null
}

// If 'regula.license' exists, init using license(enables offline match)
// otherwise init without license.
async function initialize() {
  setStatus("Initializing...")
  var license = await loadAssetIfExists("regula.license")
  var config
  if (license != null) config = new InitConfig(license)
  var [success, error] = await faceSdk.initialize({ config: config })
  if (!success && error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
}

function setImage(base64, type, position) {
  setSimilarityStatus("null")
  var mfImage = new MatchFacesImage(base64, type)
  if (position == 1) {
    image1 = mfImage
    setUiImage1("data:image/png;base64," + base64)
    setLivenessStatus("null")
  }
  if (position == 2) {
    image2 = mfImage
    setUiImage2("data:image/png;base64," + base64)
  }
}

async function useCamera(position) {
  var response = await faceSdk.startFaceCapture()
  if (response.image == null) return
  var image = response.image
  setImage(image.image, image.imageType, position)
}

function useGallery(position) {
  navigator.camera.getPicture(function (result) {
    if (result == null) return
    setImage(result, ImageType.PRINTED, position)
  }, function (_) { }, {
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    mediaType: Camera.MediaType.PICTURE
  })
}

function pickImage(position) {
  navigator.notification.confirm("", button => {
    if (button == 1) useGallery(position)
    else useCamera(position)
  }, "Select option", ["Use gallery", "Use camera"])
}

async function loadAssetIfExists(path) {
  path = cordova.file.applicationDirectory + "www/" + path
    return new Promise((resolve, _) => {
        window.resolveLocalFileSystemURL(path, (fileEntry) => {
            fileEntry.file((file) => {
                var reader = new FileReader()
                reader.onloadend = function(_) { resolve(this.result) }
                reader.readAsDataURL(file)
            })
        }, (_) => resolve(null))
    })
}

async function onDeviceReady() {
  faceSdk = FaceSDKPlugin.FaceSDK.instance

  image1 = null
  image2 = null

  // imports
  FaceCaptureResponse = FaceSDKPlugin.FaceCaptureResponse
  LivenessResponse = FaceSDKPlugin.LivenessResponse
  MatchFacesResponse = FaceSDKPlugin.MatchFacesResponse
  MatchFacesRequest = FaceSDKPlugin.MatchFacesRequest
  MatchFacesImage = FaceSDKPlugin.MatchFacesImage
  ComparedFacesSplit = FaceSDKPlugin.ComparedFacesSplit
  InitConfig = FaceSDKPlugin.InitConfig
  InitResponse = FaceSDKPlugin.InitResponse
  LivenessNotification = FaceSDKPlugin.LivenessNotification
  ImageType = FaceSDKPlugin.ImageType
  LivenessSkipStep = FaceSDKPlugin.LivenessSkipStep
  LivenessStatus = FaceSDKPlugin.LivenessStatus
  LivenessConfig = FaceSDKPlugin.LivenessConfig

  setStatus = (data) => document.getElementById("status").innerHTML = data
  setSimilarityStatus = (data) => document.getElementById("similarityResult").innerHTML = data
  setLivenessStatus = (data) => document.getElementById("livenessResult").innerHTML = data
  setUiImage1 = (data) => document.getElementById("img1").src = data
  setUiImage2 = (data) => document.getElementById("img2").src = data
  resetImages = () => {
    setUiImage1("img/portrait.png")
    setUiImage2("img/portrait.png")
  }
  document.getElementById("img1").onclick = function () { pickImage(1) }
  document.getElementById("img2").onclick = function () { pickImage(2) }
  document.getElementById("matchFaces").addEventListener("click", matchFaces)
  document.getElementById("liveness").addEventListener("click", startLiveness)
  document.getElementById("clearResults").addEventListener("click", clearResults)

  setSimilarityStatus("null")
  setLivenessStatus("null")

  init()
}
