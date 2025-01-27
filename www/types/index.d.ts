import { CameraPosition } from './customization/camera_position'
import { CustomizationColors } from './customization/customization_colors'
import { CustomizationFonts } from './customization/customization_fonts'
import { CustomizationImages } from './customization/customization_images'
import { Customization, CustomButtonTappedCompletion } from './customization/customization'
import { Font } from './customization/font'
import { ScreenOrientation } from './customization/screen_orientation'
export { CameraPosition, CustomizationColors, CustomizationFonts, CustomizationImages, Customization, CustomButtonTappedCompletion, Font, ScreenOrientation }

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
import { LivenessNotification, LivenessProcessStatus, LivenessNotificationCompletion } from './liveness/liveness_notification'
import { LivenessResponse, LivenessStatus } from './liveness/liveness_response'
export { LivenessBackendException, LivenessBackendErrorCode, LivenessConfig, RecordingProcess, LivenessType, LivenessSkipStep, LivenessException, LivenessErrorCode, LivenessNotification, LivenessProcessStatus, LivenessNotificationCompletion, LivenessResponse, LivenessStatus }

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

/**
 * Entry point of the Regula Face SDK.
 */
export class FaceSDK {
    /**
     * Information about the SDK.
     */
    get version(): FaceSDKVersion | null

    get serviceUrl(): string | null
    set serviceUrl(val: string | null)

    /**
     * A localization dictionary to override default localization logic.
     * Allows to replace any string of FaceSDK with an arbitrary string.
     * 
     * To see all the localization keys, look up the RegulaSDK.strings file at
     * ios/Pods/FaceSDK/FaceSDK.xcframework/ios-arm64/FaceSDK.framework/FaceSDK.bundle/en.lproj/FaceSDK.strings.
     * 
     * Immutable property. Use setter instead of editing.
     */
    get localizationDictionary(): Record<string, string> | null
    set localizationDictionary(val: Record<string, string> | null)

    /**
     * Immutable property. Use setter instead of editing.
     */
    get requestHeaders(): Record<string, string> | null
    set requestHeaders(val: Record<string, string> | null)

    get customization(): Customization
    set customization(val: Customization)

    /**
     * Allows user to receive a video file of current session.
     */
    set videoEncoderCompletion(completion: VideoEncoderCompletion)

    get personDatabase(): PersonDatabase

    /**
     * Checks if FaceSDK is initialized.
     */
    isInitialized(): Promise<boolean>

    /**
     * Allows you to initialize FaceSDK.
     * 
     * @param params.config - configuration file for FaceSDK initialization.
     * 
     * @returns Returns boolean indicating success of initialization
     * and a nullable {@link InitException}.
     */
    initialize(
        params?: {
            config?: InitConfig
        }
    ): Promise<[boolean, InitException | null]>

    /**
     * Used to deinitialize FaceSDK and free up RAM as a
     * consequence of this.
     */
    deinitialize(): void

    startFaceCapture(
        params?: {
            config?: FaceCaptureConfig,
            cameraSwitchCallback?: CameraSwitchCallback,
        }
    ): Promise<FaceCaptureResponse>

    stopFaceCapture(): void

    startLiveness(
        params?: {
            config?: LivenessConfig,
            notificationCompletion?: LivenessNotificationCompletion,
            cameraSwitchCallback?: CameraSwitchCallback,
        }
    ): Promise<LivenessResponse>

    stopLiveness(): void

    matchFaces(
        request: MatchFacesRequest,
        params?: {
            config?: MatchFacesConfig
        }
    ): Promise<MatchFacesResponse>

    splitComparedFaces(
        facesPairs: Array<ComparedFacesPair>,
        similarityThreshold: number
    ): Promise<ComparedFacesSplit>

    detectFaces(request: DetectFacesRequest): Promise<DetectFacesResponse>
}

export type VideoEncoderCompletion = (transactionId: string, success: boolean) => void

export type CameraSwitchCallback = (cameraId: number) => void
