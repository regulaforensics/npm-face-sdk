import { IonPage } from '@ionic/react'
import React from "react"
import { File } from '@awesome-cordova-plugins/file'
import { Dialog } from '@capacitor/dialog'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera'
import { FaceSDK, MatchFacesRequest, MatchFacesImage, InitConfig, LivenessSkipStep, ImageType, LivenessStatus, LivenessConfig } from '@regulaforensics/face-sdk'

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
  var config: InitConfig | undefined
  if (license != null) config = new InitConfig(license)
  var [success, error] = await faceSdk.initialize({ config: config })
  if (!success && error != null) {
    setStatus(error.message)
    console.log(error.code + ": " + error.message)
  }
  return success
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

async function useCamera(position: number) {
  var response = await faceSdk.startFaceCapture()
  if (response.image == null) return
  var image = response.image
  setImage("data:image/png;base64," + image.image, image.imageType, position)
}

async function useGallery(position: number) {
  var image = await Camera.getPicture({
    destinationType: DestinationType.DATA_URL,
    mediaType: MediaType.PICTURE,
    sourceType: PictureSourceType.PHOTOLIBRARY
  })
  setImage(image, ImageType.PRINTED, position)
}

async function pickImage(position: number) {
  var response = await Dialog.confirm({
    message: "Select option",
    okButtonTitle: "Use camera",
    cancelButtonTitle: "Use gallery"
  })
  if (response.value) useCamera(position)
  else useGallery(position)
}

async function loadAssetIfExists(path: string): Promise<string | null> {
  try {
    var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "public/assets")
    var fileEntry = await File.getFile(dir, path, {})
    var result = await new Promise<string | null>((resolve, _) => {
      fileEntry.file(file => {
        var reader = new FileReader()
        reader.onloadend = (_) => resolve(reader.result as string)
        reader.readAsDataURL(file)
      }, _ => resolve(null))
    })
    return result
  } catch (_) {
    return null
  }
}

var faceSdk = FaceSDK.instance

var image1: MatchFacesImage | null
var image2: MatchFacesImage | null

var setStatus = (data: string) => status.innerHTML = data
var setSimilarityStatus = (data: string) => similarityResult.innerHTML = data
var setLivenessStatus = (data: string) => livenessResult.innerHTML = data
var setUiImage1 = (data: string) => img1.src = data
var setUiImage2 = (data: string) => img2.src = data
var resetImages = () => {
  setUiImage1("assets/img/portrait.png")
  setUiImage2("assets/img/portrait.png")
}

const status = document.querySelector('.status') as HTMLElement
const similarityResult = document.querySelector('.similarityResult') as HTMLElement
const livenessResult = document.querySelector('.livenessResult') as HTMLElement
const img1 = document.querySelector('.img1') as any
const img2 = document.querySelector('.img2') as any
const matchFacesButton = document.querySelector('.matchFacesButton') as HTMLElement
const livenessButton = document.querySelector('.livenessButton') as HTMLElement
const clearResultsButton = document.querySelector('.clearResultsButton') as HTMLElement

img1.addEventListener("click", () => pickImage(1))
img2.addEventListener("click", () => pickImage(2))
matchFacesButton.addEventListener("click", matchFaces)
livenessButton.addEventListener("click", startLiveness)
clearResultsButton.addEventListener("click", clearResults)

document.addEventListener('deviceready', init)

const Home: React.FC = () => {
  return (
    <IonPage>
    </IonPage>
  )
}

export default Home
