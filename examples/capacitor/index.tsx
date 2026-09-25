import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import mainHtml from './src/main.html?raw'
import '/src/main.css'
import { main } from './src/main'
import { Dialog } from '@capacitor/dialog'

document.addEventListener('deviceready', async () => {
    document.getElementById("content").innerHTML = mainHtml
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    document.dispatchEvent(new Event('ready'))
})

export async function loadAssetIfExists(path: string): Promise<string | null> {
    try {
        var response = await fetch(`assets/${path}`)
        if (!response.ok) return null
        var blob = await response.blob()
        return await new Promise<string | null>((resolve, reject) => {
            var reader = new FileReader()
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = () => reject(reader.error)
            reader.readAsDataURL(blob)
        })
    } catch (_) {
        return null
    }
}

export async function pickImage(): Promise<string | null> {
    return (await Camera.getPhoto({
        resultType: CameraResultType.Base64,
        source: CameraSource.Photos
    })).base64String ?? null
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
