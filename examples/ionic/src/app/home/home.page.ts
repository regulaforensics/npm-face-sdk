import { Component, ViewChild, ElementRef } from '@angular/core'
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera/ngx'
import { Platform } from '@ionic/angular'
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
    setUiImage1("data:image/png;base64," + base64)
    setLivenessStatus("null")
  }
  if (position == 2) {
    image2 = mfImage
    setUiImage2("data:image/png;base64," + base64)
  }
}

async function useCamera(position: number) {
  var response = await faceSdk.startFaceCapture()
  if (response.image == null) return
  var image = response.image
  setImage(image.image, image.imageType, position)
}

function useGallery(position: number) {
  app.camera.getPicture({
    destinationType: DestinationType.DATA_URL,
    mediaType: MediaType.PICTURE,
    sourceType: PictureSourceType.PHOTOLIBRARY
  }).then((result: string) => setImage(result, ImageType.PRINTED, position))
}

function pickImage(position: number) {
  app.dialogs.confirm("", "Select option", ["Use gallery", "Use camera"]).then(button => {
    if (button == 1) useGallery(position)
    else useCamera(position)
  })
}

async function loadAssetIfExists(path: string): Promise<string | null> {
  try {
    var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "www/assets")
    var fileEntry = await File.getFile(dir, path, null)
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

var app: HomePage
var faceSdk = FaceSDK.instance

var image1: MatchFacesImage | null
var image2: MatchFacesImage | null

var setStatus = (data: string) => app.status.nativeElement.innerHTML = data
var setSimilarityStatus = (data: string) => app.similarityResult.nativeElement.innerHTML = data
var setLivenessStatus = (data: string) => app.livenessResult.nativeElement.innerHTML = data
var setUiImage1 = (data: string) => app.img1.nativeElement.src = data
var setUiImage2 = (data: string) => app.img2.nativeElement.src = data
var resetImages = () => {
  setUiImage1("assets/img/portrait.png")
  setUiImage2("assets/img/portrait.png")
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('status', { static: true }) status: ElementRef
  @ViewChild('similarityResult', { static: true }) similarityResult: ElementRef
  @ViewChild('livenessResult', { static: true }) livenessResult: ElementRef
  @ViewChild('img1', { static: true }) img1: ElementRef
  @ViewChild('img2', { static: true }) img2: ElementRef
  @ViewChild('matchFacesButton', { static: true }) matchFacesButton: ElementRef
  @ViewChild('livenessButton', { static: true }) livenessButton: ElementRef
  @ViewChild('clearResultsButton', { static: true }) clearResultsButton: ElementRef

  constructor(private platform: Platform, public dialogs: Dialogs, public camera: Camera) {
  }

  async ionViewDidEnter() {
    app = this

    app.img1.nativeElement.onclick = () => pickImage(1)
    app.img2.nativeElement.onclick = () => pickImage(2)
    app.matchFacesButton.nativeElement.addEventListener("click", matchFaces)
    app.livenessButton.nativeElement.addEventListener("click", startLiveness)
    app.clearResultsButton.nativeElement.addEventListener("click", clearResults)

    await app.platform.ready()
    init()
  }
}
