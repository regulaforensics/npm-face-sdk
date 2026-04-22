import { FaceSDK } from '../index'

export class CustomizationImages {
    _onboardingScreenCloseButton
    set onboardingScreenCloseButton(val) {
        this._onboardingScreenCloseButton = val
        this._set({ "onboardingScreenCloseButton": val })
    }

    _onboardingScreenIllumination
    set onboardingScreenIllumination(val) {
        this._onboardingScreenIllumination = val
        this._set({ "onboardingScreenIllumination": val })
    }

    _onboardingScreenAccessories
    set onboardingScreenAccessories(val) {
        this._onboardingScreenAccessories = val
        this._set({ "onboardingScreenAccessories": val })
    }

    _onboardingScreenCameraLevel
    set onboardingScreenCameraLevel(val) {
        this._onboardingScreenCameraLevel = val
        this._set({ "onboardingScreenCameraLevel": val })
    }

    _cameraScreenCloseButton
    set cameraScreenCloseButton(val) {
        this._cameraScreenCloseButton = val
        this._set({ "cameraScreenCloseButton": val })
    }

    _cameraScreenLightOnButton
    set cameraScreenLightOnButton(val) {
        this._cameraScreenLightOnButton = val
        this._set({ "cameraScreenLightOnButton": val })
    }

    _cameraScreenLightOffButton
    set cameraScreenLightOffButton(val) {
        this._cameraScreenLightOffButton = val
        this._set({ "cameraScreenLightOffButton": val })
    }

    _cameraScreenSwitchButton
    set cameraScreenSwitchButton(val) {
        this._cameraScreenSwitchButton = val
        this._set({ "cameraScreenSwitchButton": val })
    }

    _retryScreenCloseButton
    set retryScreenCloseButton(val) {
        this._retryScreenCloseButton = val
        this._set({ "retryScreenCloseButton": val })
    }

    _retryScreenHintEnvironment
    set retryScreenHintEnvironment(val) {
        this._retryScreenHintEnvironment = val
        this._set({ "retryScreenHintEnvironment": val })
    }

    _retryScreenHintSubject
    set retryScreenHintSubject(val) {
        this._retryScreenHintSubject = val
        this._set({ "retryScreenHintSubject": val })
    }

    _retryScreenHintGeo
    set retryScreenHintGeo(val) {
        this._retryScreenHintGeo = val
        this._set({ "retryScreenHintGeo": val })
    }

    _processingScreenCloseButton
    set processingScreenCloseButton(val) {
        this._processingScreenCloseButton = val
        this._set({ "processingScreenCloseButton": val })
    }

    _successScreenImage
    set successScreenImage(val) {
        this._successScreenImage = val
        this._set({ "successScreenImage": val })
    }

    static fromJson(jsonObject) {
        var result = new CustomizationImages()

        result._onboardingScreenCloseButton = jsonObject["onboardingScreenCloseButton"]
        result._onboardingScreenIllumination = jsonObject["onboardingScreenIllumination"]
        result._onboardingScreenAccessories = jsonObject["onboardingScreenAccessories"]
        result._onboardingScreenCameraLevel = jsonObject["onboardingScreenCameraLevel"]
        result._cameraScreenCloseButton = jsonObject["cameraScreenCloseButton"]
        result._cameraScreenLightOnButton = jsonObject["cameraScreenLightOnButton"]
        result._cameraScreenLightOffButton = jsonObject["cameraScreenLightOffButton"]
        result._cameraScreenSwitchButton = jsonObject["cameraScreenSwitchButton"]
        result._retryScreenCloseButton = jsonObject["retryScreenCloseButton"]
        result._retryScreenHintEnvironment = jsonObject["retryScreenHintEnvironment"]
        result._retryScreenHintSubject = jsonObject["retryScreenHintSubject"]
        result._retryScreenHintGeo = jsonObject["retryScreenHintGeo"]
        result._processingScreenCloseButton = jsonObject["processingScreenCloseButton"]
        result._successScreenImage = jsonObject["successScreenImage"]

        return result
    }

    toJson() {
        return {
            "onboardingScreenCloseButton": this._onboardingScreenCloseButton,
            "onboardingScreenIllumination": this._onboardingScreenIllumination,
            "onboardingScreenAccessories": this._onboardingScreenAccessories,
            "onboardingScreenCameraLevel": this._onboardingScreenCameraLevel,
            "cameraScreenCloseButton": this._cameraScreenCloseButton,
            "cameraScreenLightOnButton": this._cameraScreenLightOnButton,
            "cameraScreenLightOffButton": this._cameraScreenLightOffButton,
            "cameraScreenSwitchButton": this._cameraScreenSwitchButton,
            "retryScreenCloseButton": this._retryScreenCloseButton,
            "retryScreenHintEnvironment": this._retryScreenHintEnvironment,
            "retryScreenHintSubject": this._retryScreenHintSubject,
            "retryScreenHintGeo": this._retryScreenHintGeo,
            "processingScreenCloseButton": this._processingScreenCloseButton,
            "successScreenImage": this._successScreenImage,
        }
    }

    _set(json) {
        var parentJson = { "images": json }
        var parent = FaceSDK.instance.customization
        if (this === parent.images) parent._set(parentJson)
    }

    _apply() {
        this._set(this.toJson())
    }
}
