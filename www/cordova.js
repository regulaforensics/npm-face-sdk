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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraPosition: () => (/* reexport safe */ _customization_camera_position__WEBPACK_IMPORTED_MODULE_4__.CameraPosition),
/* harmony export */   FaceSDK: () => (/* binding */ FaceSDK),
/* harmony export */   InitConfig: () => (/* reexport safe */ _init_init_config__WEBPACK_IMPORTED_MODULE_1__.InitConfig),
/* harmony export */   InitErrorCode: () => (/* reexport safe */ _init_init_exception__WEBPACK_IMPORTED_MODULE_2__.InitErrorCode),
/* harmony export */   InitException: () => (/* reexport safe */ _init_init_exception__WEBPACK_IMPORTED_MODULE_2__.InitException),
/* harmony export */   LicenseException: () => (/* reexport safe */ _init_license_exception__WEBPACK_IMPORTED_MODULE_3__.LicenseException),
/* harmony export */   LicensingResultCode: () => (/* reexport safe */ _init_license_exception__WEBPACK_IMPORTED_MODULE_3__.LicensingResultCode),
/* harmony export */   LivenessBackendErrorCode: () => (/* reexport safe */ _liveness_liveness_backend_exception__WEBPACK_IMPORTED_MODULE_6__.LivenessBackendErrorCode),
/* harmony export */   LivenessBackendException: () => (/* reexport safe */ _liveness_liveness_backend_exception__WEBPACK_IMPORTED_MODULE_6__.LivenessBackendException),
/* harmony export */   LivenessConfig: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_7__.LivenessConfig),
/* harmony export */   LivenessErrorCode: () => (/* reexport safe */ _liveness_liveness_exception__WEBPACK_IMPORTED_MODULE_8__.LivenessErrorCode),
/* harmony export */   LivenessException: () => (/* reexport safe */ _liveness_liveness_exception__WEBPACK_IMPORTED_MODULE_8__.LivenessException),
/* harmony export */   LivenessNotification: () => (/* reexport safe */ _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_9__.LivenessNotification),
/* harmony export */   LivenessProcessStatus: () => (/* reexport safe */ _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_9__.LivenessProcessStatus),
/* harmony export */   LivenessResponse: () => (/* reexport safe */ _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_10__.LivenessResponse),
/* harmony export */   LivenessSkipStep: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_7__.LivenessSkipStep),
/* harmony export */   LivenessStatus: () => (/* reexport safe */ _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_10__.LivenessStatus),
/* harmony export */   LivenessType: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_7__.LivenessType),
/* harmony export */   RecordingProcess: () => (/* reexport safe */ _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_7__.RecordingProcess),
/* harmony export */   ScreenOrientation: () => (/* reexport safe */ _customization_screen_orientation__WEBPACK_IMPORTED_MODULE_5__.ScreenOrientation)
/* harmony export */ });
/* harmony import */ var _internal_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/bridge */ "./src/internal/bridge.js");
/* harmony import */ var _init_init_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init/init_config */ "./src/init/init_config.js");
/* harmony import */ var _init_init_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init/init_exception */ "./src/init/init_exception.js");
/* harmony import */ var _init_license_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init/license_exception */ "./src/init/license_exception.js");
/* harmony import */ var _customization_camera_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customization/camera_position */ "./src/customization/camera_position.js");
/* harmony import */ var _customization_screen_orientation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customization/screen_orientation */ "./src/customization/screen_orientation.js");
/* harmony import */ var _liveness_liveness_backend_exception__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liveness/liveness_backend_exception */ "./src/liveness/liveness_backend_exception.js");
/* harmony import */ var _liveness_liveness_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./liveness/liveness_config */ "./src/liveness/liveness_config.js");
/* harmony import */ var _liveness_liveness_exception__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liveness/liveness_exception */ "./src/liveness/liveness_exception.js");
/* harmony import */ var _liveness_liveness_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./liveness/liveness_notification */ "./src/liveness/liveness_notification.js");
/* harmony import */ var _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./liveness/liveness_response */ "./src/liveness/liveness_response.js");










;









class FaceSDK {
    async initialize(params) {
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("initialize", [params?.config])

        var jsonObject = JSON.parse(response)
        var success = jsonObject["success"]
        var error = jsonObject["error"]

        return [success, _init_init_exception__WEBPACK_IMPORTED_MODULE_2__.InitException.fromJson(error)]
    }

    deinitialize() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("deinitialize", [])
    }

    async startLiveness(params) {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setCameraSwitchCallback)(params?.cameraSwitchCallback)
        ;(0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__._setLivenessNotificationCompletion)(params?.notificationCompletion)
        var response = await (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("startLiveness", [params?.config])
        return _liveness_liveness_response__WEBPACK_IMPORTED_MODULE_10__.LivenessResponse.fromJson(JSON.parse(response))
    }

    stopLiveness() {
        (0,_internal_bridge__WEBPACK_IMPORTED_MODULE_0__.exec)("stopLiveness", [])
    }
}

})();

var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;