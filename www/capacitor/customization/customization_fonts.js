import { FaceSDK } from '../index'
import { Font}  from './font'

export class CustomizationFonts {
    _onboardingScreenStartButton
    set onboardingScreenStartButton(val) {
        this._onboardingScreenStartButton = val
        this._set({ "100": val })
    }

    _onboardingScreenTitleLabel
    set onboardingScreenTitleLabel(val) {
        this._onboardingScreenTitleLabel = val
        this._set({ "101": val })
    }

    _onboardingScreenSubtitleLabel
    set onboardingScreenSubtitleLabel(val) {
        this._onboardingScreenSubtitleLabel = val
        this._set({ "102": val })
    }

    _onboardingScreenMessageLabels
    set onboardingScreenMessageLabels(val) {
        this._onboardingScreenMessageLabels = val
        this._set({ "103": val })
    }

    _cameraScreenHintLabel
    set cameraScreenHintLabel(val) {
        this._cameraScreenHintLabel = val
        this._set({ "200": val })
    }

    _retryScreenRetryButton
    set retryScreenRetryButton(val) {
        this._retryScreenRetryButton = val
        this._set({ "300": val })
    }

    _retryScreenTitleLabel
    set retryScreenTitleLabel(val) {
        this._retryScreenTitleLabel = val
        this._set({ "301": val })
    }

    _retryScreenSubtitleLabel
    set retryScreenSubtitleLabel(val) {
        this._retryScreenSubtitleLabel = val
        this._set({ "302": val })
    }

    _retryScreenHintLabels
    set retryScreenHintLabels(val) {
        this._retryScreenHintLabels = val
        this._set({ "303": val })
    }

    _processingScreenLabel
    set processingScreenLabel(val) {
        this._processingScreenLabel = val
        this._set({ "400": val })
    }

    static fromJson(jsonObject) {
        var result = new CustomizationFonts()

        result._onboardingScreenStartButton = Font.fromJson(jsonObject["100"])
        result._onboardingScreenTitleLabel = Font.fromJson(jsonObject["101"])
        result._onboardingScreenSubtitleLabel = Font.fromJson(jsonObject["102"])
        result._onboardingScreenMessageLabels = Font.fromJson(jsonObject["103"])
        result._cameraScreenHintLabel = Font.fromJson(jsonObject["200"])
        result._retryScreenRetryButton = Font.fromJson(jsonObject["300"])
        result._retryScreenTitleLabel = Font.fromJson(jsonObject["301"])
        result._retryScreenSubtitleLabel = Font.fromJson(jsonObject["302"])
        result._retryScreenHintLabels = Font.fromJson(jsonObject["303"])
        result._processingScreenLabel = Font.fromJson(jsonObject["400"])

        return result
    }

    toJson() {
        return {
            "100": this._onboardingScreenStartButton,
            "101": this._onboardingScreenTitleLabel,
            "102": this._onboardingScreenSubtitleLabel,
            "103": this._onboardingScreenMessageLabels,
            "200": this._cameraScreenHintLabel,
            "300": this._retryScreenRetryButton,
            "301": this._retryScreenTitleLabel,
            "302": this._retryScreenSubtitleLabel,
            "303": this._retryScreenHintLabels,
            "400": this._processingScreenLabel,
        }
    }

    _set(json) {
        var parentJson = { "fonts": json }
        var parent = FaceSDK.instance.customization
        if (this === parent.fonts) parent._set(parentJson)
    }

    _apply() {
        this._set(this.toJson())
    }
}