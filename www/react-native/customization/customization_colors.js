import { FaceSDK } from '../index'

export class CustomizationColors {
    _onboardingScreenStartButtonBackground
    set onboardingScreenStartButtonBackground(val) {
        this._onboardingScreenStartButtonBackground = val
        this._set({ "100": val })
    }

    _onboardingScreenStartButtonTitle
    set onboardingScreenStartButtonTitle(val) {
        this._onboardingScreenStartButtonTitle = val
        this._set({ "101": val })
    }

    _onboardingScreenBackground
    set onboardingScreenBackground(val) {
        this._onboardingScreenBackground = val
        this._set({ "102": val })
    }

    _onboardingScreenTitleLabelText
    set onboardingScreenTitleLabelText(val) {
        this._onboardingScreenTitleLabelText = val
        this._set({ "103": val })
    }

    _onboardingScreenSubtitleLabelText
    set onboardingScreenSubtitleLabelText(val) {
        this._onboardingScreenSubtitleLabelText = val
        this._set({ "104": val })
    }

    _onboardingScreenMessageLabelsText
    set onboardingScreenMessageLabelsText(val) {
        this._onboardingScreenMessageLabelsText = val
        this._set({ "105": val })
    }

    _cameraScreenStrokeNormal
    set cameraScreenStrokeNormal(val) {
        this._cameraScreenStrokeNormal = val
        this._set({ "200": val })
    }

    _cameraScreenStrokeActive
    set cameraScreenStrokeActive(val) {
        this._cameraScreenStrokeActive = val
        this._set({ "201": val })
    }

    _cameraScreenSectorTarget
    set cameraScreenSectorTarget(val) {
        this._cameraScreenSectorTarget = val
        this._set({ "202": val })
    }

    _cameraScreenSectorActive
    set cameraScreenSectorActive(val) {
        this._cameraScreenSectorActive = val
        this._set({ "203": val })
    }

    _cameraScreenFrontHintLabelBackground
    set cameraScreenFrontHintLabelBackground(val) {
        this._cameraScreenFrontHintLabelBackground = val
        this._set({ "204": val })
    }

    _cameraScreenFrontHintLabelText
    set cameraScreenFrontHintLabelText(val) {
        this._cameraScreenFrontHintLabelText = val
        this._set({ "205": val })
    }

    _cameraScreenBackHintLabelBackground
    set cameraScreenBackHintLabelBackground(val) {
        this._cameraScreenBackHintLabelBackground = val
        this._set({ "206": val })
    }

    _cameraScreenBackHintLabelText
    set cameraScreenBackHintLabelText(val) {
        this._cameraScreenBackHintLabelText = val
        this._set({ "207": val })
    }

    _cameraScreenLightToolbarTint
    set cameraScreenLightToolbarTint(val) {
        this._cameraScreenLightToolbarTint = val
        this._set({ "208": val })
    }

    _cameraScreenDarkToolbarTint
    set cameraScreenDarkToolbarTint(val) {
        this._cameraScreenDarkToolbarTint = val
        this._set({ "209": val })
    }

    _retryScreenBackground
    set retryScreenBackground(val) {
        this._retryScreenBackground = val
        this._set({ "300": val })
    }

    _retryScreenRetryButtonBackground
    set retryScreenRetryButtonBackground(val) {
        this._retryScreenRetryButtonBackground = val
        this._set({ "301": val })
    }

    _retryScreenRetryButtonTitle
    set retryScreenRetryButtonTitle(val) {
        this._retryScreenRetryButtonTitle = val
        this._set({ "302": val })
    }

    _retryScreenTitleLabelText
    set retryScreenTitleLabelText(val) {
        this._retryScreenTitleLabelText = val
        this._set({ "303": val })
    }

    _retryScreenSubtitleLabelText
    set retryScreenSubtitleLabelText(val) {
        this._retryScreenSubtitleLabelText = val
        this._set({ "304": val })
    }

    _retryScreenHintLabelsText
    set retryScreenHintLabelsText(val) {
        this._retryScreenHintLabelsText = val
        this._set({ "305": val })
    }

    _processingScreenBackground
    set processingScreenBackground(val) {
        this._processingScreenBackground = val
        this._set({ "400": val })
    }

    _processingScreenProgress
    set processingScreenProgress(val) {
        this._processingScreenProgress = val
        this._set({ "401": val })
    }

    _processingScreenTitleLabel
    set processingScreenTitleLabel(val) {
        this._processingScreenTitleLabel = val
        this._set({ "402": val })
    }

    _successScreenBackground
    set successScreenBackground(val) {
        this._successScreenBackground = val
        this._set({ "500": val })
    }

    static fromJson(jsonObject) {
        var result = new CustomizationColors()

        result._onboardingScreenStartButtonBackground = jsonObject["100"]
        result._onboardingScreenStartButtonTitle = jsonObject["101"]
        result._onboardingScreenBackground = jsonObject["102"]
        result._onboardingScreenTitleLabelText = jsonObject["103"]
        result._onboardingScreenSubtitleLabelText = jsonObject["104"]
        result._onboardingScreenMessageLabelsText = jsonObject["105"]
        result._cameraScreenStrokeNormal = jsonObject["200"]
        result._cameraScreenStrokeActive = jsonObject["201"]
        result._cameraScreenSectorTarget = jsonObject["202"]
        result._cameraScreenSectorActive = jsonObject["203"]
        result._cameraScreenFrontHintLabelBackground = jsonObject["204"]
        result._cameraScreenFrontHintLabelText = jsonObject["205"]
        result._cameraScreenBackHintLabelBackground = jsonObject["206"]
        result._cameraScreenBackHintLabelText = jsonObject["207"]
        result._cameraScreenLightToolbarTint = jsonObject["208"]
        result._cameraScreenDarkToolbarTint = jsonObject["209"]
        result._retryScreenBackground = jsonObject["300"]
        result._retryScreenRetryButtonBackground = jsonObject["301"]
        result._retryScreenRetryButtonTitle = jsonObject["302"]
        result._retryScreenTitleLabelText = jsonObject["303"]
        result._retryScreenSubtitleLabelText = jsonObject["304"]
        result._retryScreenHintLabelsText = jsonObject["305"]
        result._processingScreenBackground = jsonObject["400"]
        result._processingScreenProgress = jsonObject["401"]
        result._processingScreenTitleLabel = jsonObject["402"]
        result._successScreenBackground = jsonObject["500"]

        return result
    }

    toJson() {
        return {
            "100": this._onboardingScreenStartButtonBackground,
            "101": this._onboardingScreenStartButtonTitle,
            "102": this._onboardingScreenBackground,
            "103": this._onboardingScreenTitleLabelText,
            "104": this._onboardingScreenSubtitleLabelText,
            "105": this._onboardingScreenMessageLabelsText,
            "200": this._cameraScreenStrokeNormal,
            "201": this._cameraScreenStrokeActive,
            "202": this._cameraScreenSectorTarget,
            "203": this._cameraScreenSectorActive,
            "204": this._cameraScreenFrontHintLabelBackground,
            "205": this._cameraScreenFrontHintLabelText,
            "206": this._cameraScreenBackHintLabelBackground,
            "207": this._cameraScreenBackHintLabelText,
            "208": this._cameraScreenLightToolbarTint,
            "209": this._cameraScreenDarkToolbarTint,
            "300": this._retryScreenBackground,
            "301": this._retryScreenRetryButtonBackground,
            "302": this._retryScreenRetryButtonTitle,
            "303": this._retryScreenTitleLabelText,
            "304": this._retryScreenSubtitleLabelText,
            "305": this._retryScreenHintLabelsText,
            "400": this._processingScreenBackground,
            "401": this._processingScreenProgress,
            "402": this._processingScreenTitleLabel,
            "500": this._successScreenBackground,
        }
    }

    _set(json) {
        var parentJson = { "colors": json }
        var parent = FaceSDK.instance.customization
        if (this === parent.colors) parent._set(parentJson)
    }

    _apply() {
        this._set(this.toJson())
    }
}