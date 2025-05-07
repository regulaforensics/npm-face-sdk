document.addEventListener('ready', onDeviceReady)
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

  setStatus = data => document.getElementById("status").innerHTML = data
  setLivenessStatus = data => document.getElementById("liveness-status").innerHTML = data
  setSimilarityStatus = data => document.getElementById("similarity-status").innerHTML = data
  setUiImage1 = data => document.getElementById("first-image").src = data
  setUiImage2 = data => document.getElementById("second-image").src = data
  resetImages = () => {
    setUiImage1("images/portrait.png")
    setUiImage2("images/portrait.png")
  }
  document.getElementById("first-image").onclick = () => pickImage(1)
  document.getElementById("second-image").onclick = () => pickImage(2)
  document.getElementById("match-faces").onclick = () => matchFaces()
  document.getElementById("start-liveness").onclick = () => startLiveness()
  document.getElementById("clear-results").onclick = () => clearResults()

  init()
}

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
  setImage("data:image/png;base64," + response.image, ImageType.LIVE, 1)
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
    setUiImage1(base64)
    setLivenessStatus("null")
  }
  if (position == 2) {
    image2 = mfImage
    setUiImage2(base64)
  }
}

async function useCamera(position) {
  var response = await faceSdk.startFaceCapture()
  if (response.image == null) return
  var image = response.image
  setImage("data:image/png;base64," + image.image, image.imageType, position)
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
        reader.onloadend = function (_) { resolve(this.result) }
        reader.readAsDataURL(file)
      })
    }, (_) => resolve(null))
  })
}
