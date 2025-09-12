import { FaceSDK } from '../index'

export class CustomizationImages {
    _onboardingScreenCloseButton
    set onboardingScreenCloseButton(val) {
        this._onboardingScreenCloseButton = val
        this._set({ "100": val })
    }

    _onboardingScreenIllumination
    set onboardingScreenIllumination(val) {
        this._onboardingScreenIllumination = val
        this._set({ "101": val })
    }

    _onboardingScreenAccessories
    set onboardingScreenAccessories(val) {
        this._onboardingScreenAccessories = val
        this._set({ "102": val })
    }

    _onboardingScreenCameraLevel
    set onboardingScreenCameraLevel(val) {
        this._onboardingScreenCameraLevel = val
        this._set({ "103": val })
    }

    _cameraScreenCloseButton
    set cameraScreenCloseButton(val) {
        this._cameraScreenCloseButton = val
        this._set({ "200": val })
    }

    _cameraScreenLightOnButton
    set cameraScreenLightOnButton(val) {
        this._cameraScreenLightOnButton = val
        this._set({ "201": val })
    }

    _cameraScreenLightOffButton
    set cameraScreenLightOffButton(val) {
        this._cameraScreenLightOffButton = val
        this._set({ "202": val })
    }

    _cameraScreenSwitchButton
    set cameraScreenSwitchButton(val) {
        this._cameraScreenSwitchButton = val
        this._set({ "203": val })
    }

    _retryScreenCloseButton
    set retryScreenCloseButton(val) {
        this._retryScreenCloseButton = val
        this._set({ "300": val })
    }

    _retryScreenHintEnvironment
    set retryScreenHintEnvironment(val) {
        this._retryScreenHintEnvironment = val
        this._set({ "301": val })
    }

    _retryScreenHintSubject
    set retryScreenHintSubject(val) {
        this._retryScreenHintSubject = val
        this._set({ "302": val })
    }

    _processingScreenCloseButton
    set processingScreenCloseButton(val) {
        this._processingScreenCloseButton = val
        this._set({ "400": val })
    }

    _successScreenImage
    set successScreenImage(val) {
        this._successScreenImage = val
        this._set({ "500": val })
    }

    static fromJson(jsonObject) {
        var result = new CustomizationImages()

        result._onboardingScreenCloseButton = jsonObject["100"]
        result._onboardingScreenIllumination = jsonObject["101"]
        result._onboardingScreenAccessories = jsonObject["102"]
        result._onboardingScreenCameraLevel = jsonObject["103"]
        result._cameraScreenCloseButton = jsonObject["200"]
        result._cameraScreenLightOnButton = jsonObject["201"]
        result._cameraScreenLightOffButton = jsonObject["202"]
        result._cameraScreenSwitchButton = jsonObject["203"]
        result._retryScreenCloseButton = jsonObject["300"]
        result._retryScreenHintEnvironment = jsonObject["301"]
        result._retryScreenHintSubject = jsonObject["302"]
        result._processingScreenCloseButton = jsonObject["400"]
        result._successScreenImage = jsonObject["500"]

        return result
    }

    toJson() {
        return {
            "100": this._onboardingScreenCloseButton,
            "101": this._onboardingScreenIllumination,
            "102": this._onboardingScreenAccessories,
            "103": this._onboardingScreenCameraLevel,
            "200": this._cameraScreenCloseButton,
            "201": this._cameraScreenLightOnButton,
            "202": this._cameraScreenLightOffButton,
            "203": this._cameraScreenSwitchButton,
            "300": this._retryScreenCloseButton,
            "301": this._retryScreenHintEnvironment,
            "302": this._retryScreenHintSubject,
            "400": this._processingScreenCloseButton,
            "500": this._successScreenImage,
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
