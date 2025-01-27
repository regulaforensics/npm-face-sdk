/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/customization/camera_position.js":
/*!**********************************************!*\
  !*** ./src/customization/camera_position.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraPosition: () => (/* binding */ CameraPosition)
/* harmony export */ });
const CameraPosition = {
    FRONT: 0,
    BACK: 1,
}

/***/ }),

/***/ "./src/customization/customization.js":
/*!********************************************!*\
  !*** ./src/customization/customization.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Customization: () => (/* binding */ Customization)
/* harmony export */ });
/* harmony import */ var _customization_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customization_colors */ "./src/customization/customization_colors.js");
/* harmony import */ var _customization_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customization_fonts */ "./src/customization/customization_fonts.js");
/* harmony import */ var _customization_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customization_images */ "./src/customization/customization_images.js");
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/index.js");






class Customization {
    get colors() { return this._colors }
    _colors = new _customization_colors__WEBPACK_IMPORTED_MODULE_0__.CustomizationColors()
    set colors(val) {
        (this._colors = val)._apply(this)
    }

    get fonts() { return this._fonts }
    _fonts = new _customization_fonts__WEBPACK_IMPORTED_MODULE_1__.CustomizationFonts()
    set fonts(val) {
        (this._fonts = val)._apply(this)
    }

    get images() { return this._images }
    _images = new _customization_images__WEBPACK_IMPORTED_MODULE_2__.CustomizationImages()
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
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_3__._setCustomButtonTappedCompletion)(completion)
    }

    static fromJson(jsonObject) {
        var result = new Customization()

        result.colors = _customization_colors__WEBPACK_IMPORTED_MODULE_0__.CustomizationColors.fromJson(jsonObject["colors"])
        result.fonts = _customization_fonts__WEBPACK_IMPORTED_MODULE_1__.CustomizationFonts.fromJson(jsonObject["fonts"])
        result.images = _customization_images__WEBPACK_IMPORTED_MODULE_2__.CustomizationImages.fromJson(jsonObject["images"])
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
        if (this === _index__WEBPACK_IMPORTED_MODULE_4__.FaceSDK.instance.customization) {
            (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_3__.exec)("setCustomization", [json])
        }
    }

    _apply() { this._set(toJson()) }
}

/***/ }),

/***/ "./src/customization/customization_colors.js":
/*!***************************************************!*\
  !*** ./src/customization/customization_colors.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationColors: () => (/* binding */ CustomizationColors)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


class CustomizationColors {
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
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.FaceSDK.instance.customization
        if (this === parent.colors) parent._set(parentJson)
    }

    _apply() {
        this._set(this.toJson())
    }
}

/***/ }),

/***/ "./src/customization/customization_fonts.js":
/*!**************************************************!*\
  !*** ./src/customization/customization_fonts.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationFonts: () => (/* binding */ CustomizationFonts)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./src/customization/font.js");



class CustomizationFonts {
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

        result._onboardingScreenStartButton = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["100"])
        result._onboardingScreenTitleLabel = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["101"])
        result._onboardingScreenSubtitleLabel = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["102"])
        result._onboardingScreenMessageLabels = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["103"])
        result._cameraScreenHintLabel = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["200"])
        result._retryScreenRetryButton = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["300"])
        result._retryScreenTitleLabel = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["301"])
        result._retryScreenSubtitleLabel = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["302"])
        result._retryScreenHintLabels = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["303"])
        result._processingScreenLabel = _font__WEBPACK_IMPORTED_MODULE_1__.Font.fromJson(jsonObject["400"])

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
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.FaceSDK.instance.customization
        if (this === parent.fonts) parent._set(parentJson)
    }

    _apply() {
        this._set(toJson())
    }
}

/***/ }),

/***/ "./src/customization/customization_images.js":
/*!***************************************************!*\
  !*** ./src/customization/customization_images.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizationImages: () => (/* binding */ CustomizationImages)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");


class CustomizationImages {
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
        var parent = _index__WEBPACK_IMPORTED_MODULE_0__.FaceSDK.instance.customization
        if (this === parent.images) parent._set(parentJson)
    }

    _apply() {
        this._set(toJson())
    }
}


/***/ }),

/***/ "./src/customization/font.js":
/*!***********************************!*\
  !*** ./src/customization/font.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Font: () => (/* binding */ Font),
/* harmony export */   FontStyle: () => (/* binding */ FontStyle)
/* harmony export */ });
class Font {
    name
    size
    style

    constructor(name, params) {
        this.name = name
        this.size = params?.size
        this.style = params?.style
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Font()

        result.name = jsonObject["name"]
        result.size = jsonObject["size"]
        result.style = jsonObject["style"]

        return result
    }
}

const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
}


/***/ }),

/***/ "./src/customization/screen_orientation.js":
/*!*************************************************!*\
  !*** ./src/customization/screen_orientation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenOrientation: () => (/* binding */ ScreenOrientation)
/* harmony export */ });
const ScreenOrientation = {
    PORTRAIT: 0,
    LANDSCAPE: 1,
}

/***/ }),

/***/ "./src/detect_faces/detect_face_result.js":
/*!************************************************!*\
  !*** ./src/detect_faces/detect_face_result.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFaceResult: () => (/* binding */ DetectFaceResult)
/* harmony export */ });
/* harmony import */ var _detect_faces_attribute_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect_faces_attribute_result */ "./src/detect_faces/detect_faces_attribute_result.js");
/* harmony import */ var _image_quality_image_quality_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image_quality/image_quality_result */ "./src/image_quality/image_quality_result.js");
/* harmony import */ var _image_params_rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image_params/rect */ "./src/image_params/rect.js");
/* harmony import */ var _image_params_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image_params/point */ "./src/image_params/point.js");





class DetectFaceResult {
    quality
    attributes
    crop
    faceRect
    originalRect
    landmarks
    isQualityCompliant

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFaceResult()

        result.quality = []
        if (jsonObject["quality"] != null)
            for (const item of jsonObject["quality"])
                result.quality.push(_image_quality_image_quality_result__WEBPACK_IMPORTED_MODULE_1__.ImageQualityResult.fromJson(item))
        result.attributes = []
        if (jsonObject["attributes"] != null)
            for (const item of jsonObject["attributes"])
                result.attributes.push(_detect_faces_attribute_result__WEBPACK_IMPORTED_MODULE_0__.DetectFacesAttributeResult.fromJson(item))
        result.crop = jsonObject["crop"]
        result.faceRect = _image_params_rect__WEBPACK_IMPORTED_MODULE_2__.Rect.fromJson(jsonObject["faceRect"])
        result.originalRect = _image_params_rect__WEBPACK_IMPORTED_MODULE_2__.Rect.fromJson(jsonObject["originalRect"])
        result.landmarks = []
        if (jsonObject["landmarks"] != null)
            for (const item of jsonObject["landmarks"])
                result.landmarks.push(_image_params_point__WEBPACK_IMPORTED_MODULE_3__.Point.fromJson(item))
        result.isQualityCompliant = jsonObject["isQualityCompliant"]

        return result
    }
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_attribute.js":
/*!****************************************************!*\
  !*** ./src/detect_faces/detect_faces_attribute.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesAttribute: () => (/* binding */ DetectFacesAttribute)
/* harmony export */ });
const DetectFacesAttribute = {
    AGE: "Age",
    EYE_RIGHT: "EyeRight",
    EYE_LEFT: "EyeLeft",
    EMOTION: "Emotion",
    SMILE: "Smile",
    GLASSES: "Glasses",
    HEAD_COVERING: "HeadCovering",
    FOREHEAD_COVERING: "ForeheadCovering",
    MOUTH: "Mouth",
    MEDICAL_MASK: "MedicalMask",
    OCCLUSION: "Occlusion",
    STRONG_MAKEUP: "StrongMakeup",
    HEADPHONES: "Headphones",
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_attribute_result.js":
/*!***********************************************************!*\
  !*** ./src/detect_faces/detect_faces_attribute_result.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesAttributeResult: () => (/* binding */ DetectFacesAttributeResult)
/* harmony export */ });
/* harmony import */ var _image_quality_image_quality_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image_quality/image_quality_range */ "./src/image_quality/image_quality_range.js");


class DetectFacesAttributeResult {
    attribute
    value
    range
    confidence

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesAttributeResult()

        result.attribute = jsonObject["attribute"]
        result.value = jsonObject["value"]
        result.range = _image_quality_image_quality_range__WEBPACK_IMPORTED_MODULE_0__.ImageQualityRange.fromJson(jsonObject["range"])
        result.confidence = jsonObject["confidence"]

        return result
    }
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_backend_exception.js":
/*!************************************************************!*\
  !*** ./src/detect_faces/detect_faces_backend_exception.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesBackendErrorCode: () => (/* binding */ DetectFacesBackendErrorCode),
/* harmony export */   DetectFacesBackendException: () => (/* binding */ DetectFacesBackendException)
/* harmony export */ });
class DetectFacesBackendException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesBackendException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

const DetectFacesBackendErrorCode = {
    FR_FACE_NOT_DETECTED: 2,
    FACER_NO_LICENSE: 200,
    FACER_IS_NOT_INITIALIZED: 201,
    FACER_COMMAND_IS_NOT_SUPPORTED: 202,
    FACER_COMMAND_PARAMS_READ_ERROR: 203,
    UNDEFINED: -1,
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_config.js":
/*!*************************************************!*\
  !*** ./src/detect_faces/detect_faces_config.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesConfig: () => (/* binding */ DetectFacesConfig)
/* harmony export */ });
class DetectFacesConfig {
    attributes
    customQuality
    outputImageParams
    onlyCentralFace

    constructor(params) {
        this.onlyCentralFace = false
        this.attributes = params?.attributes
        this.customQuality = params?.customQuality
        this.outputImageParams = params?.outputImageParams
        this.onlyCentralFace = params?.onlyCentralFace ?? this.onlyCentralFace
    }
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_exception.js":
/*!****************************************************!*\
  !*** ./src/detect_faces/detect_faces_exception.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesErrorCode: () => (/* binding */ DetectFacesErrorCode),
/* harmony export */   DetectFacesException: () => (/* binding */ DetectFacesException)
/* harmony export */ });
/* harmony import */ var _detect_faces_backend_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect_faces_backend_exception */ "./src/detect_faces/detect_faces_backend_exception.js");


class DetectFacesException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = _detect_faces_backend_exception__WEBPACK_IMPORTED_MODULE_0__.DetectFacesBackendException.fromJson(jsonObject["underlyingError"])

        return result
    }
}

const DetectFacesErrorCode = {
    IMAGE_EMPTY: 0,
    FR_FACE_NOT_DETECTED: 1,
    FACER_NO_LICENSE: 2,
    FACER_IS_NOT_INITIALIZED: 3,
    FACER_COMMAND_IS_NOT_SUPPORTED: 4,
    FACER_COMMAND_PARAMS_READ_ERROR: 5,
    PROCESSING_FAILED: 6,
    REQUEST_FAILED: 7,
    API_CALL_FAILED: 8,
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_request.js":
/*!**************************************************!*\
  !*** ./src/detect_faces/detect_faces_request.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesRequest: () => (/* binding */ DetectFacesRequest)
/* harmony export */ });
class DetectFacesRequest {
    image
    configuration
    tag

    constructor(image, configuration, params) {
        this.image = image
        this.configuration = configuration
        this.tag = params?.tag
    }

    static qualityFull(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_FULL
        return result
    }

    static qualityICAO(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_ICAO
        return result
    }

    static qualityVisaSchengen(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_VISA_SCHENGEN
        return result
    }

    static qualityVisaUSA(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.QUALITY_VISA_USA
        return result
    }

    static cropCentralFace(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.CROP_CENTRAL_FACE
        return result
    }

    static cropAllFaces(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.CROP_ALL_FACES
        return result
    }

    static thumbnail(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.THUMBNAIL
        return result
    }

    static allAttributes(image) {
        const result = new DetectFacesRequest()
        result.image = image
        result.scenario = DetectFacesScenario.ATTRIBUTES_ALL
        return result
    }
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_response.js":
/*!***************************************************!*\
  !*** ./src/detect_faces/detect_faces_response.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesResponse: () => (/* binding */ DetectFacesResponse)
/* harmony export */ });
/* harmony import */ var _detect_face_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detect_face_result */ "./src/detect_faces/detect_face_result.js");
/* harmony import */ var _detect_faces_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detect_faces_exception */ "./src/detect_faces/detect_faces_exception.js");



class DetectFacesResponse {
    detection
    scenario
    error
    allDetections

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new DetectFacesResponse()

        result.detection = _detect_face_result__WEBPACK_IMPORTED_MODULE_0__.DetectFaceResult.fromJson(jsonObject["detection"])
        result.scenario = jsonObject["scenario"]
        result.error = _detect_faces_exception__WEBPACK_IMPORTED_MODULE_1__.DetectFacesException.fromJson(jsonObject["error"])
        result.allDetections = []
        if (jsonObject["allDetections"] != null)
            for (const item of jsonObject["allDetections"])
                result.allDetections.push(_detect_face_result__WEBPACK_IMPORTED_MODULE_0__.DetectFaceResult.fromJson(item))

        return result
    }
}

/***/ }),

/***/ "./src/detect_faces/detect_faces_scenario.js":
/*!***************************************************!*\
  !*** ./src/detect_faces/detect_faces_scenario.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetectFacesScenario: () => (/* binding */ DetectFacesScenario)
/* harmony export */ });
const DetectFacesScenario = {
    CROP_CENTRAL_FACE: "CropCentralFace",
    CROP_ALL_FACES: "CropAllFaces",
    THUMBNAIL: "Thumbnail",
    ATTRIBUTES_ALL: "AttributesAll",
    QUALITY_FULL: "QualityFull",
    QUALITY_ICAO: "QualityICAO",
    QUALITY_VISA_SCHENGEN: "QualityVisaSchengen",
    QUALITY_VISA_USA: "QualityVisaUSA",
}

/***/ }),

/***/ "./src/face_capture/face_capture_config.js":
/*!*************************************************!*\
  !*** ./src/face_capture/face_capture_config.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceCaptureConfig: () => (/* binding */ FaceCaptureConfig)
/* harmony export */ });
/* harmony import */ var _customization_camera_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customization/camera_position */ "./src/customization/camera_position.js");
/* harmony import */ var _customization_screen_orientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customization/screen_orientation */ "./src/customization/screen_orientation.js");



class FaceCaptureConfig {
    copyright
    cameraSwitchEnabled
    closeButtonEnabled
    torchButtonEnabled
    vibrateOnSteps
    cameraPositionIOS
    screenOrientation
    cameraPositionAndroid
    timeout
    holdStillDuration

    constructor(params) {
        this.copyright = params?.copyright ?? true
        this.cameraSwitchEnabled = params?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = params?.closeButtonEnabled ?? true
        this.torchButtonEnabled = params?.torchButtonEnabled ?? true
        this.vibrateOnSteps = params?.vibrateOnSteps ?? true
        this.cameraPositionIOS = params?.cameraPositionIOS ?? _customization_camera_position__WEBPACK_IMPORTED_MODULE_0__.CameraPosition.FRONT
        this.screenOrientation = params?.screenOrientation ?? [_customization_screen_orientation__WEBPACK_IMPORTED_MODULE_1__.ScreenOrientation.PORTRAIT]
        this.cameraPositionAndroid = params?.cameraPositionAndroid
        this.timeout = params?.timeout
        this.holdStillDuration = params?.holdStillDuration
    }
}

/***/ }),

/***/ "./src/face_capture/face_capture_exception.js":
/*!****************************************************!*\
  !*** ./src/face_capture/face_capture_exception.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceCaptureErrorCode: () => (/* binding */ FaceCaptureErrorCode),
/* harmony export */   FaceCaptureException: () => (/* binding */ FaceCaptureException)
/* harmony export */ });
class FaceCaptureException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

const FaceCaptureErrorCode = {
    CANCEL: 0,
    TIMEOUT: 1,
    NOT_INITIALIZED: 2,
    SESSION_START_FAILED: 3,
    CAMERA_NOT_AVAILABLE: 4,
    CAMERA_NO_PERMISSION: 5,
    IN_PROGRESS_ALREADY: 6,
    CONTEXT_IS_NULL: 7,
}

/***/ }),

/***/ "./src/face_capture/face_capture_image.js":
/*!************************************************!*\
  !*** ./src/face_capture/face_capture_image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceCaptureImage: () => (/* binding */ FaceCaptureImage),
/* harmony export */   ImageType: () => (/* binding */ ImageType)
/* harmony export */ });
class FaceCaptureImage {
    imageType
    image
    tag

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureImage()

        result.imageType = jsonObject["imageType"]
        result.image = jsonObject["image"]
        result.tag = jsonObject["tag"]

        return result
    }
}

const ImageType = {
    PRINTED: 1,
    RFID: 2,
    LIVE: 3,
    DOCUMENT_WITH_LIVE: 4,
    EXTERNAL: 5,
    GHOST_PORTRAIT: 6,
    BARCODE: 7,
}

/***/ }),

/***/ "./src/face_capture/face_capture_response.js":
/*!***************************************************!*\
  !*** ./src/face_capture/face_capture_response.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceCaptureResponse: () => (/* binding */ FaceCaptureResponse)
/* harmony export */ });
/* harmony import */ var _face_capture_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./face_capture_image */ "./src/face_capture/face_capture_image.js");
/* harmony import */ var _face_capture_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face_capture_exception */ "./src/face_capture/face_capture_exception.js");



class FaceCaptureResponse {
    error
    image

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceCaptureResponse()

        result.error = _face_capture_exception__WEBPACK_IMPORTED_MODULE_1__.FaceCaptureException.fromJson(jsonObject["error"])
        result.image = _face_capture_image__WEBPACK_IMPORTED_MODULE_0__.FaceCaptureImage.fromJson(jsonObject["image"])

        return result
    }
}

/***/ }),

/***/ "./src/image_params/output_image_crop.js":
/*!***********************************************!*\
  !*** ./src/image_params/output_image_crop.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputImageCrop: () => (/* binding */ OutputImageCrop),
/* harmony export */   OutputImageCropAspectRatio: () => (/* binding */ OutputImageCropAspectRatio)
/* harmony export */ });
class OutputImageCrop {
    type
    size
    padColor
    returnOriginalRect

    constructor(type, params) {
        this.type = type
        this.size = params?.size
        this.padColor = params?.padColor
        this.returnOriginalRect = params?.returnOriginalRect ?? false
    }
}

const OutputImageCropAspectRatio = {
    RATIO_3X4: 0,
    RATIO_4X5: 1,
    RATIO_2X3: 2,
    RATIO_1X1: 3,
    RATIO_7X9: 4,
}

/***/ }),

/***/ "./src/image_params/output_image_params.js":
/*!*************************************************!*\
  !*** ./src/image_params/output_image_params.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputImageParams: () => (/* binding */ OutputImageParams)
/* harmony export */ });
class OutputImageParams {
    crop
    backgroundColor

    constructor(params) {
        this.crop = params?.crop
        this.backgroundColor = params?.backgroundColor
    }
}

/***/ }),

/***/ "./src/image_params/point.js":
/*!***********************************!*\
  !*** ./src/image_params/point.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
class Point {
    x
    y

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Point()

        result.x = jsonObject["x"]
        result.y = jsonObject["y"]

        return result
    }
}

/***/ }),

/***/ "./src/image_params/rect.js":
/*!**********************************!*\
  !*** ./src/image_params/rect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rect: () => (/* binding */ Rect)
/* harmony export */ });
class Rect {
    bottom
    top
    left
    right

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Rect()

        result.bottom = jsonObject["bottom"]
        result.top = jsonObject["top"]
        result.left = jsonObject["left"]
        result.right = jsonObject["right"]

        return result
    }
}

/***/ }),

/***/ "./src/image_params/size.js":
/*!**********************************!*\
  !*** ./src/image_params/size.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Size: () => (/* binding */ Size)
/* harmony export */ });
class Size {
    width
    height

    constructor(width, height) {
        this.width = width
        this.height = height
    }
}

/***/ }),

/***/ "./src/image_quality/image_quality_characteristic.js":
/*!***********************************************************!*\
  !*** ./src/image_quality/image_quality_characteristic.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityCharacteristic: () => (/* binding */ ImageQualityCharacteristic)
/* harmony export */ });
class ImageQualityCharacteristic {
    characteristicName
    recommendedRange
    customRange
    color

    static _create(name, params) {
        var result = new ImageQualityCharacteristic()
        result.characteristicName = name
        result.recommendedRange = params?.recommended
        result.customRange = params?.custom
        result.color = params?.color
        return result
    }

    withCustomRange(min, max) {
        this.customRange = new ImageQualityRange(min, max)
        return this
    }
    withCustomValue(value) {
        this.customRange = ImageQualityRange.withValue(value)
        return this
    }
}

/***/ }),

/***/ "./src/image_quality/image_quality_characteristic_name.js":
/*!****************************************************************!*\
  !*** ./src/image_quality/image_quality_characteristic_name.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityCharacteristicName: () => (/* binding */ ImageQualityCharacteristicName)
/* harmony export */ });
const ImageQualityCharacteristicName = {
    IMAGE_WIDTH: "ImageWidth",
    IMAGE_HEIGHT: "ImageHeight",
    IMAGE_WIDTH_TO_HEIGHT: "ImageWidthToHeight",
    IMAGE_CHANNELS_NUMBER: "ImageChannelsNumber",
    ART_FACE: "ArtFace",
    PADDING_RATIO: "PaddingRatio",
    FACE_MID_POINT_HORIZONTAL_POSITION: "FaceMidPointHorizontalPosition",
    FACE_MID_POINT_VERTICAL_POSITION: "FaceMidPointVerticalPosition",
    HEAD_WIDTH_RATIO: "HeadWidthRatio",
    HEAD_HEIGHT_RATIO: "HeadHeightRatio",
    EYES_DISTANCE: "EyesDistance",
    YAW: "Yaw",
    PITCH: "Pitch",
    ROLL: "Roll",
    BLUR_LEVEL: "BlurLevel",
    NOISE_LEVEL: "NoiseLevel",
    UNNATURAL_SKIN_TONE: "UnnaturalSkinTone",
    FACE_DYNAMIC_RANGE: "FaceDynamicRange",
    EYE_RIGHT_CLOSED: "EyeRightClosed",
    EYE_LEFT_CLOSED: "EyeLeftClosed",
    EYE_RIGHT_OCCLUDED: "EyeRightOccluded",
    EYE_LEFT_OCCLUDED: "EyeLeftOccluded",
    EYES_RED: "EyesRed",
    EYE_RIGHT_COVERED_WITH_HAIR: "EyeRightCoveredWithHair",
    EYE_LEFT_COVERED_WITH_HAIR: "EyeLeftCoveredWithHair",
    OFF_GAZE: "OffGaze",
    TOO_DARK: "TooDark",
    TOO_LIGHT: "TooLight",
    FACE_GLARE: "FaceGlare",
    SHADOWS_ON_FACE: "ShadowsOnFace",
    SHOULDERS_POSE: "ShouldersPose",
    EXPRESSION_LEVEL: "ExpressionLevel",
    MOUTH_OPEN: "MouthOpen",
    SMILE: "Smile",
    DARK_GLASSES: "DarkGlasses",
    REFLECTION_ON_GLASSES: "ReflectionOnGlasses",
    FRAMES_TOO_HEAVY: "FramesTooHeavy",
    FACE_OCCLUDED: "FaceOccluded",
    HEAD_COVERING: "HeadCovering",
    FOREHEAD_COVERING: "ForeheadCovering",
    STRONG_MAKEUP: "StrongMakeup",
    HEAD_PHONES: "Headphones",
    MEDICAL_MASK: "MedicalMask",
    BACKGROUND_UNIFORMITY: "BackgroundUniformity",
    SHADOWS_ON_BACKGROUND: "ShadowsOnBackground",
    OTHER_FACES: "OtherFaces",
    BACKGROUND_COLOR_MATCH: "BackgroundColorMatch",
    UNKNOWN: "Unknown",
    IMAGE_CHARACTERISTIC_ALL_RECOMMENDED: "ImageCharacteristic",
    HEAD_SIZE_AND_POSITION_ALL_RECOMMENDED: "HeadSizeAndPosition",
    FACE_IMAGE_QUALITY_ALL_RECOMMENDED: "FaceImageQuality",
    EYES_CHARACTERISTICS_ALL_RECOMMENDED: "EyesCharacteristics",
    SHADOW_AND_LIGHTING_ALL_RECOMMENDED: "ShadowsAndLightning",
    POSE_AND_EXPRESSION_ALL_RECOMMENDED: "PoseAndExpression",
    HEAD_OCCLUSION_ALL_RECOMMENDED: "HeadOcclusion",
    QUALITY_BACKGROUND_ALL_RECOMMENDED: "QualityBackground",
}

/***/ }),

/***/ "./src/image_quality/image_quality_group.js":
/*!**************************************************!*\
  !*** ./src/image_quality/image_quality_group.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityGroup: () => (/* binding */ ImageQualityGroup),
/* harmony export */   _Background: () => (/* binding */ _Background),
/* harmony export */   _Eyes: () => (/* binding */ _Eyes),
/* harmony export */   _FaceImage: () => (/* binding */ _FaceImage),
/* harmony export */   _HeadOcclusion: () => (/* binding */ _HeadOcclusion),
/* harmony export */   _HeadSizeAndPosition: () => (/* binding */ _HeadSizeAndPosition),
/* harmony export */   _Image: () => (/* binding */ _Image),
/* harmony export */   _PoseAndExpression: () => (/* binding */ _PoseAndExpression),
/* harmony export */   _ShadowsAndLightning: () => (/* binding */ _ShadowsAndLightning)
/* harmony export */ });
/* harmony import */ var _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_quality_characteristic */ "./src/image_quality/image_quality_characteristic.js");
/* harmony import */ var _image_quality_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image_quality_range */ "./src/image_quality/image_quality_range.js");



class _Image {
    imageWidth(range) {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_WIDTH,
            { recommended: range }
        )
    }

    imageHeight(range) {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_HEIGHT,
            { recommended: range }
        )
    }

    imageWidthToHeight(range) {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_WIDTH_TO_HEIGHT,
            { recommended: range }
        )
    }

    imageChannelsNumber(channelsNumber) {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.IMAGE_CHANNELS_NUMBER,
            { recommended: _image_quality_range__WEBPACK_IMPORTED_MODULE_1__.ImageQualityRange.withValue(channelsNumber) }
        )
    }

    paddingRatio(range) {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.PADDING_RATIO,
            { recommended: range }
        )
    }

    artFace() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.ART_FACE,
        )
    }

    allRecommended() {
        return [this.artFace()]
    }
}

class _HeadSizeAndPosition {
    faceMidPointHorizontalPosition() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_MID_POINT_HORIZONTAL_POSITION)
    }

    faceMidPointVerticalPosition() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_MID_POINT_VERTICAL_POSITION)
    }

    headWidthRatio() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_WIDTH_RATIO)
    }

    headHeightRatio() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_HEIGHT_RATIO)
    }

    eyesDistance() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYES_DISTANCE)
    }

    yaw() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.YAW)
    }

    pitch() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.PITCH)
    }

    roll() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.ROLL)
    }

    allRecommended() {
        return [
            this.faceMidPointHorizontalPosition(),
            this.faceMidPointVerticalPosition(),
            this.headHeightRatio(),
            this.headWidthRatio(),
            this.eyesDistance(),
            this.yaw(),
            this.pitch(),
            this.roll(),
        ]
    }
}

class _FaceImage {
    blurLevel() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.BLUR_LEVEL)
    }

    noiseLevel() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.NOISE_LEVEL)
    }

    unnaturalSkinTone() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.UNNATURAL_SKIN_TONE)
    }

    faceDynamicRange() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_DYNAMIC_RANGE)
    }

    allRecommended() {
        return [
            this.blurLevel(),
            this.noiseLevel(),
            this.unnaturalSkinTone(),
            this.faceDynamicRange(),
        ]
    }
}

class _Eyes {
    eyeRightClosed() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_RIGHT_CLOSED)
    }

    eyeLeftClosed() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_LEFT_CLOSED)
    }

    eyeRightOccluded() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_RIGHT_OCCLUDED)
    }

    eyeLeftOccluded() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_LEFT_OCCLUDED)
    }

    eyesRed() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYES_RED)
    }

    eyeRightCoveredWithHair() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_RIGHT_COVERED_WITH_HAIR)
    }

    eyeLeftCoveredWithHair() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EYE_LEFT_COVERED_WITH_HAIR)
    }

    offGaze() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.OFF_GAZE)
    }

    allRecommended() {
        return [
            this.eyeRightClosed(),
            this.eyeLeftClosed(),
            this.eyeRightOccluded(),
            this.eyeLeftOccluded(),
            this.eyesRed(),
            this.eyeRightCoveredWithHair(),
            this.eyeLeftCoveredWithHair(),
            this.offGaze(),
        ]
    }
}

class _ShadowsAndLightning {
    tooDark() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.TOO_DARK)
    }

    tooLight() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.TOO_LIGHT)
    }

    faceGlare() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_GLARE)
    }

    shadowsOnFace() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SHADOWS_ON_FACE)
    }

    allRecommended() {
        return [
            this.tooDark(),
            this.tooLight(),
            this.faceGlare(),
            this.shadowsOnFace(),
        ]
    }
}

class _PoseAndExpression {
    shouldersPose() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SHOULDERS_POSE)
    }

    expressionLevel() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.EXPRESSION_LEVEL)
    }

    mouthOpen() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.MOUTH_OPEN)
    }

    smile() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SMILE)
    }

    allRecommended() {
        return [
            this.shouldersPose(),
            this.expressionLevel(),
            this.mouthOpen(),
            this.smile(),
        ]
    }
}

class _HeadOcclusion {
    darkGlasses() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.DARK_GLASSES)
    }

    reflectionOnGlasses() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.REFLECTION_ON_GLASSES)
    }

    framesTooHeavy() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FRAMES_TOO_HEAVY)
    }

    faceOccluded() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FACE_OCCLUDED)
    }

    headCovering() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_COVERING)
    }

    foreheadCovering() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.FOREHEAD_COVERING)
    }

    strongMakeup() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.STRONG_MAKEUP)
    }

    headphones() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.HEAD_PHONES)
    }

    medicalMask() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.MEDICAL_MASK)
    }

    allRecommended() {
        return [
            this.darkGlasses(),
            this.reflectionOnGlasses(),
            this.framesTooHeavy(),
            this.faceOccluded(),
            this.headCovering(),
            this.foreheadCovering(),
            this.strongMakeup(),
            this.headphones(),
            this.medicalMask(),
        ]
    }
}

class _Background {
    backgroundUniformity() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.BACKGROUND_UNIFORMITY)
    }

    shadowsOnBackground() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.SHADOWS_ON_BACKGROUND)
    }

    otherFaces() {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(ImageQualityCharacteristicName.OTHER_FACES)
    }

    backgroundColorMatch(params) {
        return _image_quality_characteristic__WEBPACK_IMPORTED_MODULE_0__.ImageQualityCharacteristic._create(
            ImageQualityCharacteristicName.BACKGROUND_COLOR_MATCH,
            { color: params?.color }
        )
    }

    allRecommended() {
        return [
            this.backgroundUniformity(),
            this.shadowsOnBackground(),
            this.otherFaces(),
            this.backgroundColorMatch(),
        ]
    }
}

class ImageQualityGroup {
    image = new _Image()
    headSizeAndPosition = new _HeadSizeAndPosition()
    faceImage = new _FaceImage()
    eyes = new _Eyes()
    shadowsAndLightning = new _ShadowsAndLightning()
    poseAndExpression = new _PoseAndExpression()
    headOcclusion = new _HeadOcclusion()
    background = new _Background()
}

/***/ }),

/***/ "./src/image_quality/image_quality_range.js":
/*!**************************************************!*\
  !*** ./src/image_quality/image_quality_range.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityRange: () => (/* binding */ ImageQualityRange)
/* harmony export */ });
class ImageQualityRange {
    min
    max

    constructor(min, max) {
        this.min = min
        this.max = max
    }

    static withValue(value) {
        var result = new ImageQualityRange()
        result.min = value
        result.max = value
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageQualityRange()

        result.min = jsonObject["min"]
        result.max = jsonObject["max"]

        return result
    }
}

/***/ }),

/***/ "./src/image_quality/image_quality_result.js":
/*!***************************************************!*\
  !*** ./src/image_quality/image_quality_result.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageQualityGroupName: () => (/* binding */ ImageQualityGroupName),
/* harmony export */   ImageQualityResult: () => (/* binding */ ImageQualityResult),
/* harmony export */   ImageQualityResultStatus: () => (/* binding */ ImageQualityResultStatus)
/* harmony export */ });
/* harmony import */ var _image_quality_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_quality_range */ "./src/image_quality/image_quality_range.js");


class ImageQualityResult {
    group
    name
    status
    value
    range

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageQualityResult()

        result.name = jsonObject["name"]
        result.group = jsonObject["group"]
        result.status = jsonObject["status"]
        result.range = _image_quality_range__WEBPACK_IMPORTED_MODULE_0__.ImageQualityRange.fromJson(jsonObject["range"])
        result.value = jsonObject["value"]

        return result
    }
}

const ImageQualityGroupName = {
    IMAGE_CHARACTERISTICS: 1,
    HEAD_SIZE_AND_POSITION: 2,
    FACE_QUALITY: 3,
    EYES_CHARACTERISTICS: 4,
    SHADOWS_AND_LIGHTNING: 5,
    POSE_AND_EXPRESSION: 6,
    HEAD_OCCLUSION: 7,
    BACKGROUND: 8,
    UNKNOWN: 9,
}

const ImageQualityResultStatus = {
    FALSE: 0,
    TRUE: 1,
    UNDETERMINED: 2,
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraPosition: () => (/* reexport safe */ _customization_camera_position__WEBPACK_IMPORTED_MODULE_1__.CameraPosition),
/* harmony export */   ComparedFace: () => (/* reexport safe */ _match_faces_compared_face__WEBPACK_IMPORTED_MODULE_40__.ComparedFace),
/* harmony export */   ComparedFacesPair: () => (/* reexport safe */ _match_faces_compared_faces_pair__WEBPACK_IMPORTED_MODULE_41__.ComparedFacesPair),
/* harmony export */   ComparedFacesSplit: () => (/* reexport safe */ _match_faces_compared_faces_split__WEBPACK_IMPORTED_MODULE_42__.ComparedFacesSplit),
/* harmony export */   Customization: () => (/* reexport safe */ _customization_customization__WEBPACK_IMPORTED_MODULE_5__.Customization),
/* harmony export */   CustomizationColors: () => (/* reexport safe */ _customization_customization_colors__WEBPACK_IMPORTED_MODULE_2__.CustomizationColors),
/* harmony export */   CustomizationFonts: () => (/* reexport safe */ _customization_customization_fonts__WEBPACK_IMPORTED_MODULE_3__.CustomizationFonts),
/* harmony export */   CustomizationImages: () => (/* reexport safe */ _customization_customization_images__WEBPACK_IMPORTED_MODULE_4__.CustomizationImages),
/* harmony export */   DetectFaceResult: () => (/* reexport safe */ _detect_faces_detect_face_result__WEBPACK_IMPORTED_MODULE_12__.DetectFaceResult),
/* harmony export */   DetectFacesAttribute: () => (/* reexport safe */ _detect_faces_detect_faces_attribute__WEBPACK_IMPORTED_MODULE_14__.DetectFacesAttribute),
/* harmony export */   DetectFacesAttributeResult: () => (/* reexport safe */ _detect_faces_detect_faces_attribute_result__WEBPACK_IMPORTED_MODULE_13__.DetectFacesAttributeResult),
/* harmony export */   DetectFacesBackendErrorCode: () => (/* reexport safe */ _detect_faces_detect_faces_backend_exception__WEBPACK_IMPORTED_MODULE_15__.DetectFacesBackendErrorCode),
/* harmony export */   DetectFacesBackendException: () => (/* reexport safe */ _detect_faces_detect_faces_backend_exception__WEBPACK_IMPORTED_MODULE_15__.DetectFacesBackendException),
/* harmony export */   DetectFacesConfig: () => (/* reexport safe */ _detect_faces_detect_faces_config__WEBPACK_IMPORTED_MODULE_16__.DetectFacesConfig),
/* harmony export */   DetectFacesErrorCode: () => (/* reexport safe */ _detect_faces_detect_faces_exception__WEBPACK_IMPORTED_MODULE_17__.DetectFacesErrorCode),
/* harmony export */   DetectFacesException: () => (/* reexport safe */ _detect_faces_detect_faces_exception__WEBPACK_IMPORTED_MODULE_17__.DetectFacesException),
/* harmony export */   DetectFacesRequest: () => (/* reexport safe */ _detect_faces_detect_faces_request__WEBPACK_IMPORTED_MODULE_18__.DetectFacesRequest),
/* harmony export */   DetectFacesResponse: () => (/* reexport safe */ _detect_faces_detect_faces_response__WEBPACK_IMPORTED_MODULE_19__.DetectFacesResponse),
/* harmony export */   DetectFacesScenario: () => (/* reexport safe */ _detect_faces_detect_faces_scenario__WEBPACK_IMPORTED_MODULE_20__.DetectFacesScenario),
/* harmony export */   EditGroupPersonsRequest: () => (/* reexport safe */ _person_database_edit_group_persons_request__WEBPACK_IMPORTED_MODULE_51__.EditGroupPersonsRequest),
/* harmony export */   FaceCaptureConfig: () => (/* reexport safe */ _face_capture_face_capture_config__WEBPACK_IMPORTED_MODULE_21__.FaceCaptureConfig),
/* harmony export */   FaceCaptureErrorCode: () => (/* reexport safe */ _face_capture_face_capture_exception__WEBPACK_IMPORTED_MODULE_22__.FaceCaptureErrorCode),
/* harmony export */   FaceCaptureException: () => (/* reexport safe */ _face_capture_face_capture_exception__WEBPACK_IMPORTED_MODULE_22__.FaceCaptureException),
/* harmony export */   FaceCaptureImage: () => (/* reexport safe */ _face_capture_face_capture_image__WEBPACK_IMPORTED_MODULE_23__.FaceCaptureImage),
/* harmony export */   FaceCaptureResponse: () => (/* reexport safe */ _face_capture_face_capture_response__WEBPACK_IMPORTED_MODULE_24__.FaceCaptureResponse),
/* harmony export */   FaceSDK: () => (/* binding */ FaceSDK),
/* harmony export */   FaceSDKVersion: () => (/* reexport safe */ _init_face_sdk_version__WEBPACK_IMPORTED_MODULE_8__.FaceSDKVersion),
/* harmony export */   Font: () => (/* reexport safe */ _customization_font__WEBPACK_IMPORTED_MODULE_6__.Font),
/* harmony export */   ImageQualityCharacteristic: () => (/* reexport safe */ _image_quality_image_quality_characteristic__WEBPACK_IMPORTED_MODULE_31__.ImageQualityCharacteristic),
/* harmony export */   ImageQualityCharacteristicName: () => (/* reexport safe */ _image_quality_image_quality_characteristic_name__WEBPACK_IMPORTED_MODULE_30__.ImageQualityCharacteristicName),
/* harmony export */   ImageQualityGroup: () => (/* reexport safe */ _image_quality_image_quality_group__WEBPACK_IMPORTED_MODULE_32__.ImageQualityGroup),
/* harmony export */   ImageQualityGroupName: () => (/* reexport safe */ _image_quality_image_quality_result__WEBPACK_IMPORTED_MODULE_34__.ImageQualityGroupName),
/* harmony export */   ImageQualityRange: () => (/* reexport safe */ _image_quality_image_quality_range__WEBPACK_IMPORTED_MODULE_33__.ImageQualityRange),
/* harmony export */   ImageQualityResult: () => (/* reexport safe */ _image_quality_image_quality_result__WEBPACK_IMPORTED_MODULE_34__.ImageQualityResult),
/* harmony export */   ImageQualityResultStatus: () => (/* reexport safe */ _image_quality_image_quality_result__WEBPACK_IMPORTED_MODULE_34__.ImageQualityResultStatus),
/* harmony export */   ImageType: () => (/* reexport safe */ _face_capture_face_capture_image__WEBPACK_IMPORTED_MODULE_23__.ImageType),
/* harmony export */   ImageUpload: () => (/* reexport safe */ _person_database_image_upload__WEBPACK_IMPORTED_MODULE_52__.ImageUpload),
/* harmony export */   InitConfig: () => (/* reexport safe */ _init_init_config__WEBPACK_IMPORTED_MODULE_9__.InitConfig),
/* harmony export */   InitErrorCode: () => (/* reexport safe */ _init_init_exception__WEBPACK_IMPORTED_MODULE_10__.InitErrorCode),
/* harmony export */   InitException: () => (/* reexport safe */ _init_init_exception__WEBPACK_IMPORTED_MODULE_10__.InitException),
/* harmony export */   LicenseException: () => (/* reexport safe */ _init_license_exception__WEBPACK_IMPORTED_MODULE_11__.LicenseException),
/* harmony export */   LicensingResultCode: () => (/* reexport safe */ _init_license_exception__WEBPACK_IMPORTED_MODULE_11__.LicensingResultCode),
/* harmony export */   LivenessBackendErrorCode: () => (/* reexport safe */ _liveness_liveness_backend_exception__WEBPACK_IMPORTED_MODULE_35__.LivenessBackendErrorCode),
/* harmony export */   LivenessBackendException: () => (/* reexport safe */ _liveness_liveness_backend_exception__WEBPACK_IMPORTED_MODULE_35__.LivenessBackendException),
/* harmony export */   LivenessConfig: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_36__.LivenessConfig),
/* harmony export */   LivenessErrorCode: () => (/* reexport safe */ _liveness_liveness_exception__WEBPACK_IMPORTED_MODULE_37__.LivenessErrorCode),
/* harmony export */   LivenessException: () => (/* reexport safe */ _liveness_liveness_exception__WEBPACK_IMPORTED_MODULE_37__.LivenessException),
/* harmony export */   LivenessNotification: () => (/* reexport safe */ _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_38__.LivenessNotification),
/* harmony export */   LivenessProcessStatus: () => (/* reexport safe */ _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_38__.LivenessProcessStatus),
/* harmony export */   LivenessResponse: () => (/* reexport safe */ _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_39__.LivenessResponse),
/* harmony export */   LivenessSkipStep: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_36__.LivenessSkipStep),
/* harmony export */   LivenessStatus: () => (/* reexport safe */ _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_39__.LivenessStatus),
/* harmony export */   LivenessType: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_36__.LivenessType),
/* harmony export */   MatchFacesBackendException: () => (/* reexport safe */ _match_faces_match_faces_backend_exception__WEBPACK_IMPORTED_MODULE_43__.MatchFacesBackendException),
/* harmony export */   MatchFacesConfig: () => (/* reexport safe */ _match_faces_match_faces_config__WEBPACK_IMPORTED_MODULE_44__.MatchFacesConfig),
/* harmony export */   MatchFacesDetection: () => (/* reexport safe */ _match_faces_match_faces_detection__WEBPACK_IMPORTED_MODULE_46__.MatchFacesDetection),
/* harmony export */   MatchFacesDetectionFace: () => (/* reexport safe */ _match_faces_match_faces_detection_face__WEBPACK_IMPORTED_MODULE_45__.MatchFacesDetectionFace),
/* harmony export */   MatchFacesErrorCode: () => (/* reexport safe */ _match_faces_match_faces_exception__WEBPACK_IMPORTED_MODULE_47__.MatchFacesErrorCode),
/* harmony export */   MatchFacesException: () => (/* reexport safe */ _match_faces_match_faces_exception__WEBPACK_IMPORTED_MODULE_47__.MatchFacesException),
/* harmony export */   MatchFacesImage: () => (/* reexport safe */ _match_faces_match_faces_image__WEBPACK_IMPORTED_MODULE_48__.MatchFacesImage),
/* harmony export */   MatchFacesRequest: () => (/* reexport safe */ _match_faces_match_faces_request__WEBPACK_IMPORTED_MODULE_49__.MatchFacesRequest),
/* harmony export */   MatchFacesResponse: () => (/* reexport safe */ _match_faces_match_faces_response__WEBPACK_IMPORTED_MODULE_50__.MatchFacesResponse),
/* harmony export */   OutputImageCrop: () => (/* reexport safe */ _image_params_output_image_crop__WEBPACK_IMPORTED_MODULE_25__.OutputImageCrop),
/* harmony export */   OutputImageCropAspectRatio: () => (/* reexport safe */ _image_params_output_image_crop__WEBPACK_IMPORTED_MODULE_25__.OutputImageCropAspectRatio),
/* harmony export */   OutputImageParams: () => (/* reexport safe */ _image_params_output_image_params__WEBPACK_IMPORTED_MODULE_26__.OutputImageParams),
/* harmony export */   PageableItemList: () => (/* reexport safe */ _person_database_pageable_item_list__WEBPACK_IMPORTED_MODULE_53__.PageableItemList),
/* harmony export */   Person: () => (/* reexport safe */ _person_database_person__WEBPACK_IMPORTED_MODULE_57__.Person),
/* harmony export */   PersonDatabase: () => (/* reexport safe */ _person_database_person_database__WEBPACK_IMPORTED_MODULE_54__.PersonDatabase),
/* harmony export */   PersonGroup: () => (/* reexport safe */ _person_database_person_group__WEBPACK_IMPORTED_MODULE_55__.PersonGroup),
/* harmony export */   PersonImage: () => (/* reexport safe */ _person_database_person_image__WEBPACK_IMPORTED_MODULE_56__.PersonImage),
/* harmony export */   Point: () => (/* reexport safe */ _image_params_point__WEBPACK_IMPORTED_MODULE_27__.Point),
/* harmony export */   ProcessingMode: () => (/* reexport safe */ _match_faces_match_faces_config__WEBPACK_IMPORTED_MODULE_44__.ProcessingMode),
/* harmony export */   RecordingProcess: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_36__.RecordingProcess),
/* harmony export */   Rect: () => (/* reexport safe */ _image_params_rect__WEBPACK_IMPORTED_MODULE_28__.Rect),
/* harmony export */   ScreenOrientation: () => (/* reexport safe */ _customization_screen_orientation__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation),
/* harmony export */   SearchPerson: () => (/* reexport safe */ _person_database_search_person__WEBPACK_IMPORTED_MODULE_61__.SearchPerson),
/* harmony export */   SearchPersonDetection: () => (/* reexport safe */ _person_database_search_person_detection__WEBPACK_IMPORTED_MODULE_58__.SearchPersonDetection),
/* harmony export */   SearchPersonImage: () => (/* reexport safe */ _person_database_search_person_image__WEBPACK_IMPORTED_MODULE_59__.SearchPersonImage),
/* harmony export */   SearchPersonRequest: () => (/* reexport safe */ _person_database_search_person_request__WEBPACK_IMPORTED_MODULE_60__.SearchPersonRequest),
/* harmony export */   Size: () => (/* reexport safe */ _image_params_size__WEBPACK_IMPORTED_MODULE_29__.Size)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _customization_camera_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customization/camera_position */ "./src/customization/camera_position.js");
/* harmony import */ var _customization_customization_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customization/customization_colors */ "./src/customization/customization_colors.js");
/* harmony import */ var _customization_customization_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customization/customization_fonts */ "./src/customization/customization_fonts.js");
/* harmony import */ var _customization_customization_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customization/customization_images */ "./src/customization/customization_images.js");
/* harmony import */ var _customization_customization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customization/customization */ "./src/customization/customization.js");
/* harmony import */ var _customization_font__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customization/font */ "./src/customization/font.js");
/* harmony import */ var _customization_screen_orientation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customization/screen_orientation */ "./src/customization/screen_orientation.js");
/* harmony import */ var _init_face_sdk_version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./init/face_sdk_version */ "./src/init/face_sdk_version.js");
/* harmony import */ var _init_init_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./init/init_config */ "./src/init/init_config.js");
/* harmony import */ var _init_init_exception__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./init/init_exception */ "./src/init/init_exception.js");
/* harmony import */ var _init_license_exception__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./init/license_exception */ "./src/init/license_exception.js");
/* harmony import */ var _detect_faces_detect_face_result__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detect_faces/detect_face_result */ "./src/detect_faces/detect_face_result.js");
/* harmony import */ var _detect_faces_detect_faces_attribute_result__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detect_faces/detect_faces_attribute_result */ "./src/detect_faces/detect_faces_attribute_result.js");
/* harmony import */ var _detect_faces_detect_faces_attribute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detect_faces/detect_faces_attribute */ "./src/detect_faces/detect_faces_attribute.js");
/* harmony import */ var _detect_faces_detect_faces_backend_exception__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detect_faces/detect_faces_backend_exception */ "./src/detect_faces/detect_faces_backend_exception.js");
/* harmony import */ var _detect_faces_detect_faces_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detect_faces/detect_faces_config */ "./src/detect_faces/detect_faces_config.js");
/* harmony import */ var _detect_faces_detect_faces_exception__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detect_faces/detect_faces_exception */ "./src/detect_faces/detect_faces_exception.js");
/* harmony import */ var _detect_faces_detect_faces_request__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./detect_faces/detect_faces_request */ "./src/detect_faces/detect_faces_request.js");
/* harmony import */ var _detect_faces_detect_faces_response__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./detect_faces/detect_faces_response */ "./src/detect_faces/detect_faces_response.js");
/* harmony import */ var _detect_faces_detect_faces_scenario__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./detect_faces/detect_faces_scenario */ "./src/detect_faces/detect_faces_scenario.js");
/* harmony import */ var _face_capture_face_capture_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./face_capture/face_capture_config */ "./src/face_capture/face_capture_config.js");
/* harmony import */ var _face_capture_face_capture_exception__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./face_capture/face_capture_exception */ "./src/face_capture/face_capture_exception.js");
/* harmony import */ var _face_capture_face_capture_image__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./face_capture/face_capture_image */ "./src/face_capture/face_capture_image.js");
/* harmony import */ var _face_capture_face_capture_response__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./face_capture/face_capture_response */ "./src/face_capture/face_capture_response.js");
/* harmony import */ var _image_params_output_image_crop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./image_params/output_image_crop */ "./src/image_params/output_image_crop.js");
/* harmony import */ var _image_params_output_image_params__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./image_params/output_image_params */ "./src/image_params/output_image_params.js");
/* harmony import */ var _image_params_point__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./image_params/point */ "./src/image_params/point.js");
/* harmony import */ var _image_params_rect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./image_params/rect */ "./src/image_params/rect.js");
/* harmony import */ var _image_params_size__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./image_params/size */ "./src/image_params/size.js");
/* harmony import */ var _image_quality_image_quality_characteristic_name__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./image_quality/image_quality_characteristic_name */ "./src/image_quality/image_quality_characteristic_name.js");
/* harmony import */ var _image_quality_image_quality_characteristic__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./image_quality/image_quality_characteristic */ "./src/image_quality/image_quality_characteristic.js");
/* harmony import */ var _image_quality_image_quality_group__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./image_quality/image_quality_group */ "./src/image_quality/image_quality_group.js");
/* harmony import */ var _image_quality_image_quality_range__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./image_quality/image_quality_range */ "./src/image_quality/image_quality_range.js");
/* harmony import */ var _image_quality_image_quality_result__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./image_quality/image_quality_result */ "./src/image_quality/image_quality_result.js");
/* harmony import */ var _liveness_liveness_backend_exception__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./liveness/liveness_backend_exception */ "./src/liveness/liveness_backend_exception.js");
/* harmony import */ var _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./liveness/liveness_config */ "./src/liveness/liveness_config.js");
/* harmony import */ var _liveness_liveness_exception__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./liveness/liveness_exception */ "./src/liveness/liveness_exception.js");
/* harmony import */ var _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./liveness/liveness_notification */ "./src/liveness/liveness_notification.js");
/* harmony import */ var _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./liveness/liveness_response */ "./src/liveness/liveness_response.js");
/* harmony import */ var _match_faces_compared_face__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./match_faces/compared_face */ "./src/match_faces/compared_face.js");
/* harmony import */ var _match_faces_compared_faces_pair__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./match_faces/compared_faces_pair */ "./src/match_faces/compared_faces_pair.js");
/* harmony import */ var _match_faces_compared_faces_split__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./match_faces/compared_faces_split */ "./src/match_faces/compared_faces_split.js");
/* harmony import */ var _match_faces_match_faces_backend_exception__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./match_faces/match_faces_backend_exception */ "./src/match_faces/match_faces_backend_exception.js");
/* harmony import */ var _match_faces_match_faces_config__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./match_faces/match_faces_config */ "./src/match_faces/match_faces_config.js");
/* harmony import */ var _match_faces_match_faces_detection_face__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./match_faces/match_faces_detection_face */ "./src/match_faces/match_faces_detection_face.js");
/* harmony import */ var _match_faces_match_faces_detection__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./match_faces/match_faces_detection */ "./src/match_faces/match_faces_detection.js");
/* harmony import */ var _match_faces_match_faces_exception__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./match_faces/match_faces_exception */ "./src/match_faces/match_faces_exception.js");
/* harmony import */ var _match_faces_match_faces_image__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./match_faces/match_faces_image */ "./src/match_faces/match_faces_image.js");
/* harmony import */ var _match_faces_match_faces_request__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./match_faces/match_faces_request */ "./src/match_faces/match_faces_request.js");
/* harmony import */ var _match_faces_match_faces_response__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./match_faces/match_faces_response */ "./src/match_faces/match_faces_response.js");
/* harmony import */ var _person_database_edit_group_persons_request__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./person_database/edit_group_persons_request */ "./src/person_database/edit_group_persons_request.js");
/* harmony import */ var _person_database_image_upload__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./person_database/image_upload */ "./src/person_database/image_upload.js");
/* harmony import */ var _person_database_pageable_item_list__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./person_database/pageable_item_list */ "./src/person_database/pageable_item_list.js");
/* harmony import */ var _person_database_person_database__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./person_database/person_database */ "./src/person_database/person_database.js");
/* harmony import */ var _person_database_person_group__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./person_database/person_group */ "./src/person_database/person_group.js");
/* harmony import */ var _person_database_person_image__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./person_database/person_image */ "./src/person_database/person_image.js");
/* harmony import */ var _person_database_person__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./person_database/person */ "./src/person_database/person.js");
/* harmony import */ var _person_database_search_person_detection__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./person_database/search_person_detection */ "./src/person_database/search_person_detection.js");
/* harmony import */ var _person_database_search_person_image__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./person_database/search_person_image */ "./src/person_database/search_person_image.js");
/* harmony import */ var _person_database_search_person_request__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./person_database/search_person_request */ "./src/person_database/search_person_request.js");
/* harmony import */ var _person_database_search_person__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./person_database/search_person */ "./src/person_database/search_person.js");












;








;











;






;







;







;







;













;














class FaceSDK {
    get version() { return this._version }
    _version

    get serviceUrl() { return this._serviceUrl }
    _serviceUrl
    set serviceUrl(val) {
        this._serviceUrl = val
        this._setServiceUrl(val)
    }

    get localizationDictionary() { return this._localizationDictionary }
    _localizationDictionary
    set localizationDictionary(val) {
        var temp = Object.assign({}, val);
        Object.freeze(temp);
        this._localizationDictionary = temp
        this._setLocalizationDictionary(val)
    }

    get requestHeaders() { return this._requestHeaders }
    _requestHeaders
    set requestHeaders(val) {
        var temp = Object.assign({}, val);
        Object.freeze(temp);
        this._requestHeaders = temp
        this._setRequestHeaders(val)
    }

    get customization() { return this._customization }
    _customization = new _customization_customization__WEBPACK_IMPORTED_MODULE_5__.Customization()
    set customization(val) {
        this._customization = val
        this._customization._apply()
    }

    set videoEncoderCompletion(completion) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setVideoEncoderCompletion)(completion)
    }

    get personDatabase() { return this._personDatabase }
    _personDatabase = new _person_database_person_database__WEBPACK_IMPORTED_MODULE_54__.PersonDatabase()

    async isInitialized() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("isInitialized", [])
    }

    async initialize(params) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("initialize", [params?.config])

        var jsonObject = JSON.parse(response)
        var success = jsonObject["success"]
        var error = jsonObject["error"]

        if (success) await this._onInit()

        return [success, _init_init_exception__WEBPACK_IMPORTED_MODULE_10__.InitException.fromJson(error)]
    }

    deinitialize() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("deinitialize", [])
    }

    async startFaceCapture(params) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setCameraSwitchCallback)(params?.cameraSwitchCallback)
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("startFaceCapture", [params?.config])
        return _face_capture_face_capture_response__WEBPACK_IMPORTED_MODULE_24__.FaceCaptureResponse.fromJson(JSON.parse(response))
    }

    stopFaceCapture() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("stopFaceCapture", [])
    }

    async startLiveness(params) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setCameraSwitchCallback)(params?.cameraSwitchCallback)
        ;(0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setLivenessNotificationCompletion)(params?.notificationCompletion)
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("startLiveness", [params?.config])
        return _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_39__.LivenessResponse.fromJson(JSON.parse(response))
    }

    stopLiveness() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("stopLiveness", [])
    }

    async matchFaces(request, params) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("matchFaces", [request, params?.config])
        return _match_faces_match_faces_response__WEBPACK_IMPORTED_MODULE_50__.MatchFacesResponse.fromJson(JSON.parse(response))
    }

    async splitComparedFaces(facesPairs, similarityThreshold) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("splitComparedFaces", [facesPairs, similarityThreshold])
        return _match_faces_compared_faces_split__WEBPACK_IMPORTED_MODULE_42__.ComparedFacesSplit.fromJson(JSON.parse(response))
    }

    async detectFaces(request) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("detectFaces", [request])
        return _detect_faces_detect_faces_response__WEBPACK_IMPORTED_MODULE_19__.DetectFacesResponse.fromJson(JSON.parse(response))
    }

    async _onInit() {
        this._version = await this._getVersion()
        this._serviceUrl = await this._getServiceUrl()
    }

    async _getVersion() {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getVersion", [])
        return _init_face_sdk_version__WEBPACK_IMPORTED_MODULE_8__.FaceSDKVersion.fromJson(JSON.parse(response))
    }

    async _getServiceUrl() {
        return await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getServiceUrl", [])
    }

    _setServiceUrl(url) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setServiceUrl", [url])
    }

    _setLocalizationDictionary(dictionary) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setLocalizationDictionary", [dictionary])
    }

    _setRequestHeaders(dictionary) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("setRequestHeaders", [dictionary])
    }
}


/***/ }),

/***/ "./src/init/face_sdk_version.js":
/*!**************************************!*\
  !*** ./src/init/face_sdk_version.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaceSDKVersion: () => (/* binding */ FaceSDKVersion)
/* harmony export */ });
class FaceSDKVersion {
    api
    core
    coreMode

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceSDKVersion()

        result.api = jsonObject["api"]
        result.core = jsonObject["core"]
        result.coreMode = jsonObject["coreMode"]

        return result
    }
}

/***/ }),

/***/ "./src/init/init_config.js":
/*!*********************************!*\
  !*** ./src/init/init_config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitConfig: () => (/* binding */ InitConfig)
/* harmony export */ });
class InitConfig {
    license
    licenseUpdate

    constructor(license, params) {
        this.license = license
        this.licenseUpdate = params?.licenseUpdate
    }
}

/***/ }),

/***/ "./src/init/init_exception.js":
/*!************************************!*\
  !*** ./src/init/init_exception.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitErrorCode: () => (/* binding */ InitErrorCode),
/* harmony export */   InitException: () => (/* binding */ InitException)
/* harmony export */ });
/* harmony import */ var _license_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./license_exception */ "./src/init/license_exception.js");


class InitException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new InitException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = _license_exception__WEBPACK_IMPORTED_MODULE_0__.LicenseException.fromJson(jsonObject["underlyingError"])

        return result
    }
}

const InitErrorCode = {
    IN_PROGRESS_ALREADY: 0,
    MISSING_CORE: 1,
    INTERNAL_CORE_ERROR: 2,
    BAD_LICENSE: 3,
    UNAVAILABLE: 4,
    CONTEXT_IS_NULL: 100,
    RESOURCE_DAT_ABSENT: 101,
    LICENSE_IS_NULL: 102,
}

/***/ }),

/***/ "./src/init/license_exception.js":
/*!***************************************!*\
  !*** ./src/init/license_exception.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LicenseException: () => (/* binding */ LicenseException),
/* harmony export */   LicensingResultCode: () => (/* binding */ LicensingResultCode)
/* harmony export */ });
class LicenseException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LicenseException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

const LicensingResultCode = {
    OK: 0,
    LICENSE_CORRUPTED: 1,
    INVALID_DATE: 2,
    INVALID_VERSION: 3,
    INVALID_DEVICE_ID: 4,
    INVALID_SYSTEM_OR_APP_ID: 5,
    NO_CAPABILITIES: 6,
    NO_AUTHENTICITY: 7,
    LICENSE_ABSENT: 8,
    NO_INTERNET: 9,
    NO_DATABASE: 10,
    DATABASE_INCORRECT: 11,
}

/***/ }),

/***/ "./src/internal/bridge.js":
/*!********************************!*\
  !*** ./src/internal/bridge.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _setCameraSwitchCallback: () => (/* binding */ _setCameraSwitchCallback),
/* harmony export */   _setCustomButtonTappedCompletion: () => (/* binding */ _setCustomButtonTappedCompletion),
/* harmony export */   _setLivenessNotificationCompletion: () => (/* binding */ _setLivenessNotificationCompletion),
/* harmony export */   _setVideoEncoderCompletion: () => (/* binding */ _setVideoEncoderCompletion),
/* harmony export */   exec: () => (/* binding */ exec)
/* harmony export */ });
/* harmony import */ var _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../liveness/liveness_notification */ "./src/liveness/liveness_notification.js");
/* harmony import */ var _cordova__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cordova */ "./src/internal/cordova.js");



const { RNFaceSDK } = _cordova__WEBPACK_IMPORTED_MODULE_1__.NativeModules
var eventManager = new _cordova__WEBPACK_IMPORTED_MODULE_1__.NativeEventEmitter(RNFaceSDK)

async function exec(name, params) {
    return RNFaceSDK.exec(name, params)
}

function _setEvent(id, completion) {
    eventManager.removeAllListeners(id)
    if (completion != null)
        eventManager.addListener(id, completion)
}

function _setCustomButtonTappedCompletion(completion) {
    _setEvent("onCustomButtonTappedEvent", completion)
}

function _setVideoEncoderCompletion(completion) {
    _setEvent("video_encoder_completion", (json) => {
        var jsonObject = JSON.parse(json)
        var transactionId = jsonObject["transactionId"]
        var success = jsonObject["success"]
        completion(transactionId, success)
    })
}

function _setLivenessNotificationCompletion(completion) {
    _setEvent("livenessNotificationEvent", (json) => {
        var livenessNotification = _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_0__.LivenessNotification.fromJson(JSON.parse(json))
        completion(livenessNotification)
    })
}

function _setCameraSwitchCallback(completion) {
    _setEvent("cameraSwitchEvent", completion)
}

/***/ }),

/***/ "./src/internal/cordova.js":
/*!*********************************!*\
  !*** ./src/internal/cordova.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NativeEventEmitter: () => (/* binding */ NativeEventEmitter),
/* harmony export */   NativeModules: () => (/* binding */ NativeModules)
/* harmony export */ });
var _exec = (completion, params) => cordova.exec(completion, null, "FaceSDK", "exec", params)

const NativeModules = {
    RNFaceSDK: {
        exec: async (name, params) => new Promise((resolve, _) => _exec(data => resolve(data), [name, ...params]))
    }
}

class NativeEventEmitter {
    addListener(id, completion) {
        _exec(completion, ["setEvent", id])
    }

    removeAllListeners(id) {
        _exec(null, ["setEvent", id])
    }
}

/***/ }),

/***/ "./src/liveness/liveness_backend_exception.js":
/*!****************************************************!*\
  !*** ./src/liveness/liveness_backend_exception.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivenessBackendErrorCode: () => (/* binding */ LivenessBackendErrorCode),
/* harmony export */   LivenessBackendException: () => (/* binding */ LivenessBackendException)
/* harmony export */ });
class LivenessBackendException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessBackendException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

const LivenessBackendErrorCode = {
    UNDEFINED: -1,
    NO_LICENSE: 200,
    NOT_INITIALIZED: 201,
    COMMAND_IS_NOT_SUPPORTED: 202,
    PARAMS_READ_ERROR: 203,
    LOW_QUALITY: 231,
    TRACK_BREAK: 246,
    CLOSED_EYES_DETECTED: 230,
    HIGH_ASYMMETRY: 232,
    FACE_OVER_EMOTIONAL: 233,
    SUNGLASSES_DETECTED: 234,
    SMALL_AGE: 235,
    HEADDRESS_DETECTED: 236,
    MEDICINE_MASK_DETECTED: 239,
    OCCLUSION_DETECTED: 240,
    FOREHEAD_GLASSES_DETECTED: 242,
    MOUTH_OPENED: 243,
    ART_MASK_DETECTED: 244,
    NOT_MATCHED: 237,
    IMAGES_COUNT_LIMIT_EXCEEDED: 238,
    ELECTRONIC_DEVICE_DETECTED: 245,
    WRONG_GEO: 247,
    WRONG_OF: 248,
    WRONG_VIEW: 249,
}

/***/ }),

/***/ "./src/liveness/liveness_config.js":
/*!*****************************************!*\
  !*** ./src/liveness/liveness_config.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivenessConfig: () => (/* binding */ LivenessConfig),
/* harmony export */   LivenessSkipStep: () => (/* binding */ LivenessSkipStep),
/* harmony export */   LivenessType: () => (/* binding */ LivenessType),
/* harmony export */   RecordingProcess: () => (/* binding */ RecordingProcess)
/* harmony export */ });
/* harmony import */ var _customization_camera_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customization/camera_position */ "./src/customization/camera_position.js");
/* harmony import */ var _customization_screen_orientation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customization/screen_orientation */ "./src/customization/screen_orientation.js");



class LivenessConfig {
    copyright
    cameraSwitchEnabled
    closeButtonEnabled
    torchButtonEnabled
    vibrateOnSteps
    cameraPositionIOS
    screenOrientation
    cameraPositionAndroid
    locationTrackingEnabled
    attemptsCount
    recordingProcess
    livenessType
    tag
    skipStep
    metadata

    constructor(params) {
        this.copyright = params?.copyright ?? true
        this.cameraSwitchEnabled = params?.cameraSwitchEnabled ?? false
        this.closeButtonEnabled = params?.closeButtonEnabled ?? true
        this.torchButtonEnabled = params?.torchButtonEnabled ?? true
        this.vibrateOnSteps = params?.vibrateOnSteps ?? true
        this.cameraPositionIOS = params?.cameraPositionIOS ?? _customization_camera_position__WEBPACK_IMPORTED_MODULE_0__.CameraPosition.FRONT
        this.screenOrientation = params?.screenOrientation ?? [_customization_screen_orientation__WEBPACK_IMPORTED_MODULE_1__.ScreenOrientation.PORTRAIT]
        this.locationTrackingEnabled = params?.locationTrackingEnabled ?? true
        this.attemptsCount = params?.attemptsCount ?? 0
        this.recordingProcess = params?.recordingProcess ?? RecordingProcess.ASYNCHRONOUS_UPLOAD
        this.livenessType = params?.livenessType ?? LivenessType.ACTIVE
        this.skipStep = params?.skipStep ?? []
        this.cameraPositionAndroid = params?.cameraPositionAndroid
        this.tag = params?.tag
        this.metadata = params?.metadata
    }
}

const RecordingProcess = {
    ASYNCHRONOUS_UPLOAD: 0,
    SYNCHRONOUS_UPLOAD: 1,
    NOT_UPLOAD: 2,
}

const LivenessType = {
    ACTIVE: 0,
    PASSIVE: 1,
}

const LivenessSkipStep = {
    ONBOARDING_STEP: 0,
    SUCCESS_STEP: 1,
}

/***/ }),

/***/ "./src/liveness/liveness_exception.js":
/*!********************************************!*\
  !*** ./src/liveness/liveness_exception.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivenessErrorCode: () => (/* binding */ LivenessErrorCode),
/* harmony export */   LivenessException: () => (/* binding */ LivenessException)
/* harmony export */ });
/* harmony import */ var _liveness_backend_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveness_backend_exception */ "./src/liveness/liveness_backend_exception.js");


class LivenessException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = _liveness_backend_exception__WEBPACK_IMPORTED_MODULE_0__.LivenessBackendException.fromJson(jsonObject["underlyingError"])

        return result
    }
}

const LivenessErrorCode = {
    NOT_INITIALIZED: 0,
    NO_LICENSE: 1,
    API_CALL_FAILED: 2,
    SESSION_START_FAILED: 3,
    CANCELLED: 4,
    PROCESSING_TIMEOUT: 5,
    PROCESSING_FAILED: 6,
    PROCESSING_FRAME_FAILED: 7,
    APPLICATION_INACTIVE: 8,
    CONTEXT_IS_NULL: 9,
    IN_PROGRESS_ALREADY: 10,
    ZOOM_NOT_SUPPORTED: 11,
    CAMERA_NO_PERMISSION: 12,
    CAMERA_NOT_AVAILABLE: 13,
}

/***/ }),

/***/ "./src/liveness/liveness_notification.js":
/*!***********************************************!*\
  !*** ./src/liveness/liveness_notification.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivenessNotification: () => (/* binding */ LivenessNotification),
/* harmony export */   LivenessProcessStatus: () => (/* binding */ LivenessProcessStatus)
/* harmony export */ });
/* harmony import */ var _liveness_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveness_response */ "./src/liveness/liveness_response.js");


class LivenessNotification {
    status
    response

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessNotification()

        result.status = jsonObject["status"]
        result.response = _liveness_response__WEBPACK_IMPORTED_MODULE_0__.LivenessResponse.fromJson(jsonObject["response"])

        return result
    }
}

const LivenessProcessStatus = {
    START: 0,
    PREPARING: 1,
    NEW_SESSION: 2,
    NEXT_STAGE: 3,
    SECTOR_CHANGED: 4,
    PROGRESS: 5,
    LOW_BRIGHTNESS: 6,
    FIT_FACE: 7,
    MOVE_AWAY: 8,
    MOVE_CLOSER: 9,
    TURN_HEAD: 10,
    PROCESSING: 11,
    FAILED: 12,
    RETRY: 13,
    SUCCESS: 14,
}

/***/ }),

/***/ "./src/liveness/liveness_response.js":
/*!*******************************************!*\
  !*** ./src/liveness/liveness_response.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LivenessResponse: () => (/* binding */ LivenessResponse),
/* harmony export */   LivenessStatus: () => (/* binding */ LivenessStatus)
/* harmony export */ });
/* harmony import */ var _liveness_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liveness_exception */ "./src/liveness/liveness_exception.js");



class LivenessResponse {
    image
    liveness
    tag
    transactionId
    estimatedAge
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LivenessResponse()

        result.image = jsonObject["image"]
        result.liveness = jsonObject["liveness"]
        result.tag = jsonObject["tag"]
        result.transactionId = jsonObject["transactionId"]
        result.estimatedAge = jsonObject["estimatedAge"]
        result.error = _liveness_exception__WEBPACK_IMPORTED_MODULE_0__.LivenessException.fromJson(jsonObject["error"])

        return result
    }
}

const LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
}

/***/ }),

/***/ "./src/match_faces/compared_face.js":
/*!******************************************!*\
  !*** ./src/match_faces/compared_face.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComparedFace: () => (/* binding */ ComparedFace)
/* harmony export */ });
/* harmony import */ var _match_faces_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match_faces_image */ "./src/match_faces/match_faces_image.js");
/* harmony import */ var _match_faces_detection_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match_faces_detection_face */ "./src/match_faces/match_faces_detection_face.js");



class ComparedFace {
    imageIndex
    image
    faceIndex
    face

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ComparedFace()

        result.imageIndex = jsonObject["imageIndex"]
        result.image = _match_faces_image__WEBPACK_IMPORTED_MODULE_0__.MatchFacesImage.fromJson(jsonObject["image"])
        result.faceIndex = jsonObject["faceIndex"]
        result.face = _match_faces_detection_face__WEBPACK_IMPORTED_MODULE_1__.MatchFacesDetectionFace.fromJson(jsonObject["face"])

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/compared_faces_pair.js":
/*!************************************************!*\
  !*** ./src/match_faces/compared_faces_pair.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComparedFacesPair: () => (/* binding */ ComparedFacesPair)
/* harmony export */ });
/* harmony import */ var _compared_face__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compared_face */ "./src/match_faces/compared_face.js");
/* harmony import */ var _match_faces_exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match_faces_exception */ "./src/match_faces/match_faces_exception.js");



class ComparedFacesPair {
    first
    second
    similarity
    score
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ComparedFacesPair()

        result.first = _compared_face__WEBPACK_IMPORTED_MODULE_0__.ComparedFace.fromJson(jsonObject["first"])
        result.second = _compared_face__WEBPACK_IMPORTED_MODULE_0__.ComparedFace.fromJson(jsonObject["second"])
        result.similarity = jsonObject["similarity"]
        result.score = jsonObject["score"]
        result.error = _match_faces_exception__WEBPACK_IMPORTED_MODULE_1__.MatchFacesException.fromJson(jsonObject["error"])

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/compared_faces_split.js":
/*!*************************************************!*\
  !*** ./src/match_faces/compared_faces_split.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComparedFacesSplit: () => (/* binding */ ComparedFacesSplit)
/* harmony export */ });
/* harmony import */ var _compared_faces_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compared_faces_pair */ "./src/match_faces/compared_faces_pair.js");


class ComparedFacesSplit {
    matchedFaces
    unmatchedFaces

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ComparedFacesSplit()

        result.matchedFaces = []
        if (jsonObject["matchedFaces"] != null)
            for (const item of jsonObject["matchedFaces"])
                result.matchedFaces.push(_compared_faces_pair__WEBPACK_IMPORTED_MODULE_0__.ComparedFacesPair.fromJson(item))
        result.unmatchedFaces = []
        if (jsonObject["unmatchedFaces"] != null)
            for (const item of jsonObject["unmatchedFaces"])
                result.unmatchedFaces.push(_compared_faces_pair__WEBPACK_IMPORTED_MODULE_0__.ComparedFacesPair.fromJson(item))

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/match_faces_backend_exception.js":
/*!**********************************************************!*\
  !*** ./src/match_faces/match_faces_backend_exception.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesBackendException: () => (/* binding */ MatchFacesBackendException)
/* harmony export */ });
class MatchFacesBackendException {
    code
    message

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesBackendException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/match_faces_config.js":
/*!***********************************************!*\
  !*** ./src/match_faces/match_faces_config.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesConfig: () => (/* binding */ MatchFacesConfig),
/* harmony export */   ProcessingMode: () => (/* binding */ ProcessingMode)
/* harmony export */ });
class MatchFacesConfig {
    processingMode

    constructor(params) {
        this.processingMode = params?.processingMode ?? ProcessingMode.ONLINE
    }
}

const ProcessingMode = {
    ONLINE: 0,
    OFFLINE: 1,
}

/***/ }),

/***/ "./src/match_faces/match_faces_detection.js":
/*!**************************************************!*\
  !*** ./src/match_faces/match_faces_detection.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesDetection: () => (/* binding */ MatchFacesDetection)
/* harmony export */ });
/* harmony import */ var _match_faces_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match_faces_image */ "./src/match_faces/match_faces_image.js");
/* harmony import */ var _match_faces_detection_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match_faces_detection_face */ "./src/match_faces/match_faces_detection_face.js");
/* harmony import */ var _match_faces_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match_faces_exception */ "./src/match_faces/match_faces_exception.js");




class MatchFacesDetection {
    imageIndex
    image
    faces
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesDetection()

        result.imageIndex = jsonObject["imageIndex"]
        result.image = _match_faces_image__WEBPACK_IMPORTED_MODULE_0__.MatchFacesImage.fromJson(jsonObject["image"])
        result.faces = []
        if (jsonObject["faces"] != null)
            for (const item of jsonObject["faces"])
                result.faces.push(_match_faces_detection_face__WEBPACK_IMPORTED_MODULE_1__.MatchFacesDetectionFace.fromJson(item))
        result.error = _match_faces_exception__WEBPACK_IMPORTED_MODULE_2__.MatchFacesException.fromJson(jsonObject["error"])

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/match_faces_detection_face.js":
/*!*******************************************************!*\
  !*** ./src/match_faces/match_faces_detection_face.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesDetectionFace: () => (/* binding */ MatchFacesDetectionFace)
/* harmony export */ });
/* harmony import */ var _image_params_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image_params/point */ "./src/image_params/point.js");
/* harmony import */ var _image_params_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image_params/rect */ "./src/image_params/rect.js");



class MatchFacesDetectionFace {
    faceIndex
    landmarks
    faceRect
    rotationAngle
    originalRect
    crop

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesDetectionFace()

        result.faceIndex = jsonObject["faceIndex"]
        result.landmarks = []
        if (jsonObject["landmarks"] != null)
            for (const item of jsonObject["landmarks"])
                result.landmarks.push(_image_params_point__WEBPACK_IMPORTED_MODULE_0__.Point.fromJson(item))
        result.faceRect = _image_params_rect__WEBPACK_IMPORTED_MODULE_1__.Rect.fromJson(jsonObject["faceRect"])
        result.rotationAngle = jsonObject["rotationAngle"]
        result.originalRect = _image_params_rect__WEBPACK_IMPORTED_MODULE_1__.Rect.fromJson(jsonObject["originalRect"])
        result.crop = jsonObject["crop"]

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/match_faces_exception.js":
/*!**************************************************!*\
  !*** ./src/match_faces/match_faces_exception.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesErrorCode: () => (/* binding */ MatchFacesErrorCode),
/* harmony export */   MatchFacesException: () => (/* binding */ MatchFacesException)
/* harmony export */ });
/* harmony import */ var _match_faces_backend_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match_faces_backend_exception */ "./src/match_faces/match_faces_backend_exception.js");


class MatchFacesException {
    code
    message
    underlyingError

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesException()

        result.code = jsonObject["code"]
        result.message = jsonObject["message"] ?? ""
        result.underlyingError = _match_faces_backend_exception__WEBPACK_IMPORTED_MODULE_0__.MatchFacesBackendException.fromJson(jsonObject["underlyingError"])

        return result
    }
}

const MatchFacesErrorCode = {
    IMAGE_EMPTY: 0,
    FACE_NOT_DETECTED: 1,
    LANDMARKS_NOT_DETECTED: 2,
    FACE_ALIGNER_FAILED: 3,
    DESCRIPTOR_EXTRACTOR_ERROR: 4,
    IMAGES_COUNT_LIMIT_EXCEEDED: 5,
    API_CALL_FAILED: 6,
    PROCESSING_FAILED: 7,
    NO_LICENSE: 8,
}

/***/ }),

/***/ "./src/match_faces/match_faces_image.js":
/*!**********************************************!*\
  !*** ./src/match_faces/match_faces_image.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesImage: () => (/* binding */ MatchFacesImage)
/* harmony export */ });
class MatchFacesImage {
    image
    imageType
    detectAll
    identifier

    constructor(image, imageType, params) {
        this.image = image
        this.imageType = imageType
        this.detectAll = params?.detectAll ?? false
        this.identifier = ""
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesImage()

        result.image = jsonObject["image"]
        result.imageType = jsonObject["imageType"]
        result.detectAll = jsonObject["detectAll"]
        result.identifier = jsonObject["identifier"]

        return result
    }
}

/***/ }),

/***/ "./src/match_faces/match_faces_request.js":
/*!************************************************!*\
  !*** ./src/match_faces/match_faces_request.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesRequest: () => (/* binding */ MatchFacesRequest)
/* harmony export */ });
class MatchFacesRequest {
    images
    outputImageParams
    tag
    metadata

    constructor(images, params) {
        this.images = images
        this.outputImageParams = params?.outputImageParams
        this.tag = params?.tag
        this.metadata = params?.metadata
    }
}

/***/ }),

/***/ "./src/match_faces/match_faces_response.js":
/*!*************************************************!*\
  !*** ./src/match_faces/match_faces_response.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchFacesResponse: () => (/* binding */ MatchFacesResponse)
/* harmony export */ });
/* harmony import */ var _compared_faces_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compared_faces_pair */ "./src/match_faces/compared_faces_pair.js");
/* harmony import */ var _match_faces_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match_faces_detection */ "./src/match_faces/match_faces_detection.js");
/* harmony import */ var _match_faces_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match_faces_exception */ "./src/match_faces/match_faces_exception.js");




class MatchFacesResponse {
    results
    detections
    tag
    error

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesResponse()

        result.results = []
        if (jsonObject["results"] != null)
            for (const item of jsonObject["results"])
                result.results.push(_compared_faces_pair__WEBPACK_IMPORTED_MODULE_0__.ComparedFacesPair.fromJson(item))
        result.detections = []
        if (jsonObject["detections"] != null)
            for (const item of jsonObject["detections"])
                result.detections.push(_match_faces_detection__WEBPACK_IMPORTED_MODULE_1__.MatchFacesDetection.fromJson(item))
        result.tag = jsonObject["tag"]
        result.error = _match_faces_exception__WEBPACK_IMPORTED_MODULE_2__.MatchFacesException.fromJson(jsonObject["error"])

        return result
    }
}

/***/ }),

/***/ "./src/person_database/edit_group_persons_request.js":
/*!***********************************************************!*\
  !*** ./src/person_database/edit_group_persons_request.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditGroupPersonsRequest: () => (/* binding */ EditGroupPersonsRequest)
/* harmony export */ });
class EditGroupPersonsRequest {
    personIdsToAdd
    personIdsToRemove

    constructor(params) {
        this.personIdsToAdd = params?.personIdsToAdd
        this.personIdsToRemove = params?.personIdsToRemove
    }
}


/***/ }),

/***/ "./src/person_database/image_upload.js":
/*!*********************************************!*\
  !*** ./src/person_database/image_upload.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUpload: () => (/* binding */ ImageUpload)
/* harmony export */ });
class ImageUpload {
    imageData
    imageUrl

    static withImageData(imageData) {
        var result = new ImageUpload()
        result.imageData = imageData
        return result
    }

    static withImageUrl(imageUrl) {
        var result = new ImageUpload()
        result.imageUrl = imageUrl
        return result
    }
}


/***/ }),

/***/ "./src/person_database/pageable_item_list.js":
/*!***************************************************!*\
  !*** ./src/person_database/pageable_item_list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageableItemList: () => (/* binding */ PageableItemList)
/* harmony export */ });
class PageableItemList {
    items
    page
    totalPages

    static fromJson(jsonObject, fromJSON) {
        if (jsonObject == null) return null
        var result = new PageableItemList()

        if (jsonObject["items"] != null) {
            result.items = []
            for (var item of jsonObject["items"]) {
                var temp = fromJSON(item)
                if (temp != null) result.items.push(temp)
            }
        }
        result.page = jsonObject["page"]
        result.totalPages = jsonObject["totalPages"]

        return result
    }
}


/***/ }),

/***/ "./src/person_database/person.js":
/*!***************************************!*\
  !*** ./src/person_database/person.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Person: () => (/* binding */ Person)
/* harmony export */ });
class Person {
    name
    updatedAt
    groups
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new Person()

        result.name = jsonObject["name"]
        result.updatedAt = new Date(jsonObject["updatedAt"])
        result.groups = jsonObject["groups"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}


/***/ }),

/***/ "./src/person_database/person_database.js":
/*!************************************************!*\
  !*** ./src/person_database/person_database.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonDatabase: () => (/* binding */ PersonDatabase)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person */ "./src/person_database/person.js");
/* harmony import */ var _person_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person_image */ "./src/person_database/person_image.js");
/* harmony import */ var _pageable_item_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageable_item_list */ "./src/person_database/pageable_item_list.js");
/* harmony import */ var _person_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person_group */ "./src/person_database/person_group.js");
/* harmony import */ var _search_person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search_person */ "./src/person_database/search_person.js");







class PersonDatabase {
    async createPerson(name, params) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("createPerson", [name, params?.groupIds, params?.metadata])
        return this._itemResponseFromJson(response, _person__WEBPACK_IMPORTED_MODULE_1__.Person.fromJson)
    }

    async updatePerson(person) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("updatePerson", [person])
        return this._successResponseFromJson(response)
    }

    async deletePerson(personId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("deletePerson", [personId])
        return this._successResponseFromJson(response)
    }

    async getPerson(personId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPerson", [personId])
        return this._itemResponseFromJson(response, _person__WEBPACK_IMPORTED_MODULE_1__.Person.fromJson)
    }

    async addPersonImage(personId, image) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("addPersonImage", [personId, image])
        return this._itemResponseFromJson(response, _person_image__WEBPACK_IMPORTED_MODULE_2__.PersonImage.fromJson)
    }

    async deletePersonImage(personId, imageId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("deletePersonImage", [personId, imageId])
        return this._successResponseFromJson(response)
    }

    async getPersonImage(personId, imageId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonImage", [personId, imageId])
        return this._itemResponseFromJson(response, _person_image__WEBPACK_IMPORTED_MODULE_2__.PersonImage.fromJson)
    }

    async getPersonImages(personId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonImages", [personId])
        return this._listResponseFromJson(response, _person_image__WEBPACK_IMPORTED_MODULE_2__.PersonImage.fromJson)
    }

    async getPersonImagesForPage(personId, page, size) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonImagesForPage", [personId, page, size])
        return this._listResponseFromJson(response, _person_image__WEBPACK_IMPORTED_MODULE_2__.PersonImage.fromJson)
    }

    async createGroup(name, params) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("createGroup", [name, params?.metadata])
        return this._itemResponseFromJson(response, _person_group__WEBPACK_IMPORTED_MODULE_4__.PersonGroup.fromJson)
    }

    async updateGroup(group) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("updateGroup", [group])
        return this._successResponseFromJson(response)
    }

    async editPersonsInGroup(groupId, request) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("editPersonsInGroup", [groupId, request])
        return this._successResponseFromJson(response)
    }

    async deleteGroup(groupId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("deleteGroup", [groupId])
        return this._successResponseFromJson(response)
    }

    async getGroup(groupId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getGroup", [groupId])
        return this._itemResponseFromJson(response, _person_group__WEBPACK_IMPORTED_MODULE_4__.PersonGroup.fromJson)
    }

    async getGroups() {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getGroups", [])
        return this._listResponseFromJson(response, _person_group__WEBPACK_IMPORTED_MODULE_4__.PersonGroup.fromJson)
    }

    async getGroupsForPage(page, size) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getGroupsForPage", [page, size])
        return this._listResponseFromJson(response, _person_group__WEBPACK_IMPORTED_MODULE_4__.PersonGroup.fromJson)
    }

    async getPersonGroups(personId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonGroups", [personId])
        return this._listResponseFromJson(response, _person_group__WEBPACK_IMPORTED_MODULE_4__.PersonGroup.fromJson)
    }

    async getPersonGroupsForPage(personId, page, size) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonGroupsForPage", [personId, page, size])
        return this._listResponseFromJson(response, _person_group__WEBPACK_IMPORTED_MODULE_4__.PersonGroup.fromJson)
    }

    async getPersonsInGroup(groupId) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonsInGroup", [groupId])
        return this._listResponseFromJson(response, _person__WEBPACK_IMPORTED_MODULE_1__.Person.fromJson)
    }

    async getPersonsInGroupForPage(groupId, page, size) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("getPersonsInGroupForPage", [groupId, page, size])
        return this._listResponseFromJson(response, _person__WEBPACK_IMPORTED_MODULE_1__.Person.fromJson)
    }

    async searchPerson(request) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("searchPerson", [request])

        var jsonObject = JSON.parse(response)
        var data = null
        if (jsonObject["data"] != null) {
            data = []
            for (var item of jsonObject["data"])
                data.push(_search_person__WEBPACK_IMPORTED_MODULE_5__.SearchPerson.fromJson(item))
        }
        var error = jsonObject["error"]

        return [data, error]
    }

    _successResponseFromJson(jsonString) {
        var jsonObject = JSON.parse(jsonString)
        var data = jsonObject["data"]
        var error = jsonObject["error"]
        var success = data ?? false
        return [success, error]
    }

    _itemResponseFromJson(jsonString, fromJSON) {
        var jsonObject = JSON.parse(jsonString)
        var data = fromJSON(jsonObject["data"])
        var error = jsonObject["error"]
        return [data, error]
    }

    _listResponseFromJson(jsonString, fromJSON) {
        var jsonObject = JSON.parse(jsonString)
        var data = _pageable_item_list__WEBPACK_IMPORTED_MODULE_3__.PageableItemList.fromJson(jsonObject["data"], fromJSON)
        var error = jsonObject["error"]
        return [data, error]
    }
}


/***/ }),

/***/ "./src/person_database/person_group.js":
/*!*********************************************!*\
  !*** ./src/person_database/person_group.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonGroup: () => (/* binding */ PersonGroup)
/* harmony export */ });
class PersonGroup {
    name
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new PersonGroup()

        result.name = jsonObject["name"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}


/***/ }),

/***/ "./src/person_database/person_image.js":
/*!*********************************************!*\
  !*** ./src/person_database/person_image.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonImage: () => (/* binding */ PersonImage)
/* harmony export */ });
class PersonImage {
    path
    url
    contentType
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new PersonImage()

        result.path = jsonObject["path"]
        result.url = jsonObject["url"]
        result.contentType = jsonObject["contentType"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}


/***/ }),

/***/ "./src/person_database/search_person.js":
/*!**********************************************!*\
  !*** ./src/person_database/search_person.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPerson: () => (/* binding */ SearchPerson)
/* harmony export */ });
/* harmony import */ var _search_person_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search_person_image */ "./src/person_database/search_person_image.js");
/* harmony import */ var _search_person_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_person_detection */ "./src/person_database/search_person_detection.js");



class SearchPerson {
    images = []
    detection
    name
    updatedAt
    groups
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new SearchPerson()

        if (jsonObject["images"] != null)
            for (var item of jsonObject["images"])
                result.images.push(_search_person_image__WEBPACK_IMPORTED_MODULE_0__.SearchPersonImage.fromJson(item))
        result.detection = _search_person_detection__WEBPACK_IMPORTED_MODULE_1__.SearchPersonDetection.fromJson(jsonObject["detection"])
        result.name = jsonObject["name"]
        result.updatedAt = new Date(jsonObject["updatedAt"])
        result.groups = jsonObject["groups"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}


/***/ }),

/***/ "./src/person_database/search_person_detection.js":
/*!********************************************************!*\
  !*** ./src/person_database/search_person_detection.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPersonDetection: () => (/* binding */ SearchPersonDetection)
/* harmony export */ });
/* harmony import */ var _image_params_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image_params/point */ "./src/image_params/point.js");
/* harmony import */ var _image_params_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image_params/rect */ "./src/image_params/rect.js");



class SearchPersonDetection {
    landmarks = []
    rect
    crop
    rotationAngle

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new SearchPersonDetection()

        for (var item of jsonObject["landmarks"])
            result.landmarks.push(_image_params_point__WEBPACK_IMPORTED_MODULE_0__.Point.fromJson(item))
        result.rect = _image_params_rect__WEBPACK_IMPORTED_MODULE_1__.Rect.fromJson(jsonObject["rect"])
        result.crop = jsonObject["crop"]
        result.rotationAngle = jsonObject["rotationAngle"]

        return result
    }
}


/***/ }),

/***/ "./src/person_database/search_person_image.js":
/*!****************************************************!*\
  !*** ./src/person_database/search_person_image.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPersonImage: () => (/* binding */ SearchPersonImage)
/* harmony export */ });
class SearchPersonImage {
    similarity
    distance
    path
    url
    contentType
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new SearchPersonImage()

        result.similarity = jsonObject["similarity"]
        result.distance = jsonObject["distance"]
        result.path = jsonObject["path"]
        result.url = jsonObject["url"]
        result.contentType = jsonObject["contentType"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}


/***/ }),

/***/ "./src/person_database/search_person_request.js":
/*!******************************************************!*\
  !*** ./src/person_database/search_person_request.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPersonRequest: () => (/* binding */ SearchPersonRequest)
/* harmony export */ });
class SearchPersonRequest {
    imageUpload
    groupIdsForSearch
    threshold
    limit
    detectAll
    outputImageParams

    constructor(image, params) {
        this.imageUpload = image
        this.groupIdsForSearch = params?.groupIdsForSearch
        this.threshold = params?.threshold
        this.limit = params?.limit
        this.detectAll = params?.detectAll ?? false
        this.outputImageParams = params?.outputImageParams
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;