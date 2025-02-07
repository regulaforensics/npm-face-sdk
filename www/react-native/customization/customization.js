import { CustomizationColors } from './customization_colors'
import { CustomizationFonts } from './customization_fonts'
import { CustomizationImages } from './customization_images'
import { _setCustomButtonTappedCompletion, exec } from '../internal/bridge'
import { FaceSDK } from '../index'

export class Customization {
    get colors() { return this._colors }
    _colors = new CustomizationColors()
    set colors(val) {
        (this._colors = val)._apply(this)
    }

    get fonts() { return this._fonts }
    _fonts = new CustomizationFonts()
    set fonts(val) {
        (this._fonts = val)._apply(this)
    }

    get images() { return this._images }
    _images = new CustomizationImages()
    set images(val) {
        (this._images = val)._apply(this)
    }

    get uiCustomizationLayer() { return this._uiCustomizationLayer }
    _uiCustomizationLayer
    set uiCustomizationLayer(val) {
        var temp = Object.assign({}, val);
        Object.freeze(temp);
        this._uiCustomizationLayer = temp
        this._set({ "uiCustomizationLayer": val })
    }

    set onCustomButtonTapped(completion) {
        _setCustomButtonTappedCompletion(completion)
    }

    static fromJson(jsonObject) {
        var result = new Customization()

        result.colors = CustomizationColors.fromJson(jsonObject["colors"])
        result.fonts = CustomizationFonts.fromJson(jsonObject["fonts"])
        result.images = CustomizationImages.fromJson(jsonObject["images"])
        result._uiCustomizationLayer = jsonObject["uiCustomizationLayer"]

        return result
    }

    toJson() {
        return {
            "colors": this.colors.toJson(),
            "fonts": this.fonts.toJson(),
            "images": this.images.toJson(),
            "uiCustomizationLayer": this.uiCustomizationLayer
        }
    }

    _set(json) {
        if (this === FaceSDK.instance.customization) {
            exec("setCustomization", [json])
        }
    }

    _apply() { this._set(toJson()) }
}