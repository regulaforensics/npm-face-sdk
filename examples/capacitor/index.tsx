import '@ionic/react/css/core.css'
import '/src/main.css'
import { setupIonicReact } from '@ionic/react'
import { StatusBar, Style } from '@capacitor/status-bar'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera'
import { main } from './src/main'
import { Dialog } from '@capacitor/dialog'

document.addEventListener('deviceready', () => fetch("main.html")
    .then(response => response.text())
    .then(html => document.getElementById("content").innerHTML = html)
    .then(_ => document.dispatchEvent(new Event('ready')))
)

export async function loadAssetIfExists(path: string): Promise<string | null> {
    try {
        var dir = await File.resolveDirectoryUrl(File.applicationDirectory + "public/assets")
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

export async function pickImage(): Promise<string | null> {
    return await Camera.getPicture({
        destinationType: DestinationType.DATA_URL,
        mediaType: MediaType.PICTURE,
        sourceType: PictureSourceType.PHOTOLIBRARY
    })
}

export async function chooseOption(): Promise<boolean | null> {
    var response = await Dialog.confirm({
        message: "Select option",
        okButtonTitle: "Use camera",
        cancelButtonTitle: "Use gallery"
    })
    return response.value
}

document.addEventListener('ready', main)

setupIonicReact()
StatusBar.setStyle({ style: Style.Light })
