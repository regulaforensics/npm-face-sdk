import { FaceSDK, MatchFacesRequest, MatchFacesImage, InitConfig, LivenessSkipStep, ImageType, LivenessStatus, LivenessConfig } from '@regulaforensics/face-sdk'
import { loadAssetIfExists, chooseOption, pickImage } from '../index'

var faceSdk = FaceSDK.instance
var image1: MatchFacesImage | null
var image2: MatchFacesImage | null

async function init() {
  if (!await initializeReader()) return
  setStatus("Ready")
}

async function startFaceCapture(position: number) {
  var image = (await faceSdk.startFaceCapture()).image
  if (image == null) return
  setImage("data:image/png;base64," + image.image, image.imageType, position)
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

async function getImage(position: number) {
  var source = await chooseOption()
  if (source == null) return
  if (source) startFaceCapture(position)
  else {
    var image = await pickImage()
    if (image == null) return
    setImage(image, ImageType.PRINTED, position)
  }
}

function setImage(base64: string, type: number, position: number) {
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

// If 'regula.license' exists, init using license(enables offline match)
// otherwise init without license.
async function initializeReader() {
  setStatus("Initializing...")

  var license = await loadAssetIfExists("regula.license")
  var config: InitConfig | undefined
  if (license != null) config = new InitConfig(license)
  var [success, error] = await faceSdk.initialize({ config: config })

  if (error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
}

// --------------------------------------------------------------------------------------------------------------------

export function main() {
  document.getElementById("first-image")!.onclick = () => getImage(1)
  document.getElementById("second-image")!.onclick = () => getImage(2)
  document.getElementById("match-faces")!.onclick = () => matchFaces()
  document.getElementById("start-liveness")!.onclick = () => startLiveness()
  document.getElementById("clear-results")!.onclick = () => clearResults()

  init()
}

var setStatus = (data: string) => document.getElementById("status")!.innerHTML = data
var setLivenessStatus = (data: string) => document.getElementById("liveness-status")!.innerHTML = data
var setSimilarityStatus = (data: string) => document.getElementById("similarity-status")!.innerHTML = data
var setUiImage1 = (data: string) => (document.getElementById("first-image") as HTMLImageElement).src = data
var setUiImage2 = (data: string) => (document.getElementById("second-image") as HTMLImageElement).src = data
var clearResults = () => {
  setStatus("Ready")
  setSimilarityStatus("null")
  setLivenessStatus("null")
  setUiImage1("images/portrait.png")
  setUiImage2("images/portrait.png")
  image1 = null
  image2 = null
}
