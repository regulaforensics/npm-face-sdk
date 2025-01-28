import { Component, ViewChild, ElementRef } from '@angular/core'
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera/ngx'
import { Platform } from '@ionic/angular'
import { FaceSDK, InitConfig, LivenessSkipStep, LivenessStatus, LivenessConfig } from '@regulaforensics/face-sdk'

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
  setImage(response.image, 1)
  setLivenessStatus(response.liveness == LivenessStatus.PASSED ? "passed" : "unknown")
}

function clearResults() {
  setStatus("Ready")
  setLivenessStatus("null")
  resetImages()
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

function setImage(base64: string, position: number) {
  setSimilarityStatus("null")
  if (position == 1) {
    setUiImage1("data:image/png;base64," + base64)
    setLivenessStatus("null")
  }
  if (position == 2)
    setUiImage2("data:image/png;base64," + base64)
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
var faceSdk = new FaceSDK()

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

    app.livenessButton.nativeElement.addEventListener("click", startLiveness)
    app.clearResultsButton.nativeElement.addEventListener("click", clearResults)

    await app.platform.ready()
    init()
  }
}
