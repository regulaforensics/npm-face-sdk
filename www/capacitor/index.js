import { exec, _setVideoEncoderCompletion, _setLivenessNotificationCompletion, _setCameraSwitchCallback } from './internal/bridge'

import { CameraPosition } from './customization/camera_position'
import { CustomizationColors } from './customization/customization_colors'
import { CustomizationFonts } from './customization/customization_fonts'
import { CustomizationImages } from './customization/customization_images'
import { Customization } from './customization/customization'
import { Font } from './customization/font'
import { ScreenOrientation } from './customization/screen_orientation'

export { CameraPosition, CustomizationColors, CustomizationFonts, CustomizationImages, Customization, Font, ScreenOrientation }

import { FaceSDKVersion } from './init/face_sdk_version'
import { InitConfig } from './init/init_config'
import { InitException } from './init/init_exception'
import { InitErrorCode } from './init/init_exception'
import { LicenseException } from './init/license_exception'
import { LicensingResultCode } from './init/license_exception'

export { FaceSDKVersion, InitConfig, InitException, InitErrorCode, LicenseException, LicensingResultCode }

import { DetectFaceResult } from './detect_faces/detect_face_result'
import { DetectFacesAttributeResult } from './detect_faces/detect_faces_attribute_result'
import { DetectFacesAttribute } from './detect_faces/detect_faces_attribute'
import { DetectFacesBackendException, DetectFacesBackendErrorCode } from './detect_faces/detect_faces_backend_exception'
import { DetectFacesConfig } from './detect_faces/detect_faces_config'
import { DetectFacesException, DetectFacesErrorCode } from './detect_faces/detect_faces_exception'
import { DetectFacesRequest } from './detect_faces/detect_faces_request'
import { DetectFacesResponse } from './detect_faces/detect_faces_response'
import { DetectFacesScenario } from './detect_faces/detect_faces_scenario'

export { DetectFaceResult, DetectFacesAttributeResult, DetectFacesAttribute, DetectFacesBackendException, DetectFacesBackendErrorCode, DetectFacesConfig, DetectFacesException, DetectFacesErrorCode, DetectFacesRequest, DetectFacesResponse, DetectFacesScenario }

import { FaceCaptureConfig } from './face_capture/face_capture_config'
import { FaceCaptureException, FaceCaptureErrorCode } from './face_capture/face_capture_exception'
import { FaceCaptureImage, ImageType } from './face_capture/face_capture_image'
import { FaceCaptureResponse } from './face_capture/face_capture_response'

export { FaceCaptureConfig, FaceCaptureException, FaceCaptureErrorCode, FaceCaptureImage, ImageType, FaceCaptureResponse }

import { OutputImageCrop, OutputImageCropAspectRatio } from './image_params/output_image_crop'
import { OutputImageParams } from './image_params/output_image_params'
import { Point } from './image_params/point'
import { Rect } from './image_params/rect'
import { Size } from './image_params/size'

export { OutputImageCrop, OutputImageCropAspectRatio, OutputImageParams, Point, Rect, Size }

import { ImageQualityCharacteristicName } from './image_quality/image_quality_characteristic_name'
import { ImageQualityCharacteristic } from './image_quality/image_quality_characteristic'
import { ImageQualityGroup } from './image_quality/image_quality_group'
import { ImageQualityRange } from './image_quality/image_quality_range'
import { ImageQualityResult, ImageQualityGroupName, ImageQualityResultStatus } from './image_quality/image_quality_result'

export { ImageQualityCharacteristicName, ImageQualityCharacteristic, ImageQualityGroup, ImageQualityRange, ImageQualityResult, ImageQualityGroupName, ImageQualityResultStatus }

import { LivenessBackendException, LivenessBackendErrorCode } from './liveness/liveness_backend_exception'
import { LivenessConfig, RecordingProcess, LivenessType, LivenessSkipStep } from './liveness/liveness_config'
import { LivenessException, LivenessErrorCode } from './liveness/liveness_exception'
import { LivenessNotification, LivenessProcessStatus } from './liveness/liveness_notification'
import { LivenessResponse, LivenessStatus } from './liveness/liveness_response'

export { LivenessBackendException, LivenessBackendErrorCode, LivenessConfig, RecordingProcess, LivenessType, LivenessSkipStep, LivenessException, LivenessErrorCode, LivenessNotification, LivenessProcessStatus, LivenessResponse, LivenessStatus }

import { ComparedFace } from './match_faces/compared_face'
import { ComparedFacesPair } from './match_faces/compared_faces_pair'
import { ComparedFacesSplit } from './match_faces/compared_faces_split'
import { MatchFacesBackendException } from './match_faces/match_faces_backend_exception'
import { MatchFacesConfig, ProcessingMode } from './match_faces/match_faces_config'
import { MatchFacesDetectionFace } from './match_faces/match_faces_detection_face'
import { MatchFacesDetection } from './match_faces/match_faces_detection'
import { MatchFacesException, MatchFacesErrorCode } from './match_faces/match_faces_exception'
import { MatchFacesImage } from './match_faces/match_faces_image'
import { MatchFacesRequest } from './match_faces/match_faces_request'
import { MatchFacesResponse } from './match_faces/match_faces_response'

export { ComparedFace, ComparedFacesPair, ComparedFacesSplit, MatchFacesBackendException, MatchFacesConfig, ProcessingMode, MatchFacesDetectionFace, MatchFacesDetection, MatchFacesException, MatchFacesErrorCode, MatchFacesImage, MatchFacesRequest, MatchFacesResponse }

import { EditGroupPersonsRequest } from './person_database/edit_group_persons_request'
import { ImageUpload } from './person_database/image_upload'
import { PageableItemList } from './person_database/pageable_item_list'
import { PersonDatabase } from './person_database/person_database'
import { PersonGroup } from './person_database/person_group'
import { PersonImage } from './person_database/person_image'
import { Person } from './person_database/person'
import { SearchPersonDetection } from './person_database/search_person_detection'
import { SearchPersonImage } from './person_database/search_person_image'
import { SearchPersonRequest } from './person_database/search_person_request'
import { SearchPerson } from './person_database/search_person'

export { EditGroupPersonsRequest, ImageUpload, PageableItemList, PersonDatabase, PersonGroup, PersonImage, Person, SearchPersonDetection, SearchPersonImage, SearchPersonRequest, SearchPerson }


export class FaceSDK {
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
    _customization = new Customization()
    set customization(val) {
        this._customization = val
        this._customization._apply()
    }

    set videoEncoderCompletion(completion) {
        _setVideoEncoderCompletion(completion)
    }

    get personDatabase() { return this._personDatabase }
    _personDatabase = new PersonDatabase()

    async isInitialized() {
        return await exec("isInitialized", [])
    }

    async initialize(params) {
        var response = await exec("initialize", [params?.config])

        var jsonObject = JSON.parse(response)
        var success = jsonObject["success"]
        var error = jsonObject["error"]

        if (success) await this._onInit()

        return [success, InitException.fromJson(error)]
    }

    deinitialize() {
        exec("deinitialize", [])
    }

    async startFaceCapture(params) {
        _setCameraSwitchCallback(params?.cameraSwitchCallback)
        var response = await exec("startFaceCapture", [params?.config])
        return FaceCaptureResponse.fromJson(JSON.parse(response))
    }

    stopFaceCapture() {
        exec("stopFaceCapture", [])
    }

    async startLiveness(params) {
        _setCameraSwitchCallback(params?.cameraSwitchCallback)
        _setLivenessNotificationCompletion(params?.notificationCompletion)
        var response = await exec("startLiveness", [params?.config])
        return LivenessResponse.fromJson(JSON.parse(response))
    }

    stopLiveness() {
        exec("stopLiveness", [])
    }

    async matchFaces(request, params) {
        var response = await exec("matchFaces", [request, params?.config])
        return MatchFacesResponse.fromJson(JSON.parse(response))
    }

    async splitComparedFaces(facesPairs, similarityThreshold) {
        var response = await exec("splitComparedFaces", [facesPairs, similarityThreshold])
        return ComparedFacesSplit.fromJson(JSON.parse(response))
    }

    async detectFaces(request) {
        var response = await exec("detectFaces", [request])
        return DetectFacesResponse.fromJson(JSON.parse(response))
    }

    async _onInit() {
        this._version = await this._getVersion()
        this._serviceUrl = await this._getServiceUrl()
    }

    async _getVersion() {
        var response = await exec("getVersion", [])
        return FaceSDKVersion.fromJson(JSON.parse(response))
    }

    async _getServiceUrl() {
        return await exec("getServiceUrl", [])
    }

    _setServiceUrl(url) {
        exec("setServiceUrl", [url])
    }

    _setLocalizationDictionary(dictionary) {
        exec("setLocalizationDictionary", [dictionary])
    }

    _setRequestHeaders(dictionary) {
        exec("setRequestHeaders", [dictionary])
    }
}
