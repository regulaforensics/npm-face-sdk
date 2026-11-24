import { compare } from './utils'
import {
    Customization,
    Point,
    Rect,
    Size,
    OutputImageCrop,
    OutputImageParams,
    ImageQualityRange,
    ImageQualityResult,
    ImageQualityCharacteristic,
    FaceSDKVersion,
    InitConfig,
    LicenseException,
    InitException,
    DetectFacesAttributeResult,
    DetectFaceResult,
    DetectFacesConfig,
    DetectFacesRequest,
    DetectFacesBackendException,
    DetectFacesException,
    DetectFacesResponse,
    FaceCaptureConfig,
    FaceCaptureImage,
    FaceCaptureException,
    FaceCaptureResponse,
    LivenessConfig,
    EnrollmentConfig,
    VerificationConfig,
    LivenessBackendException,
    LivenessException,
    LivenessResponse,
    LivenessNotification,
    EnrollmentResponse,
    VerificationMatchResponse,
    VerificationResponse,
    MatchFacesConfig,
    MatchFacesImage,
    MatchFacesRequest,
    MatchFacesDetectionFace,
    MatchFacesBackendException,
    MatchFacesException,
    MatchFacesDetection,
    ComparedFace,
    ComparedFacesPair,
    MatchFacesResponse,
    ComparedFacesSplit,
    EditGroupPersonsRequest,
    ImageUpload,
    Person,
    PersonGroup,
    PersonImage,
    SearchPersonDetection,
    SearchPersonImage,
    SearchPerson,
    SearchPersonRequest,
    SearchPersonFilter,
} from '@regulaforensics/face-sdk/www/capacitor'
import {
    customization,
    point,
    rect,
    size,
    outputImageCrop,
    outputImageParams,
    imageQualityRange,
    imageQualityResult,
    imageQualityCharacteristic,
    faceSDKVersion,
    initConfig,
    licenseException,
    initException,
    detectFacesAttributeResult,
    detectFaceResult,
    detectFacesConfig,
    detectFacesRequest,
    detectFacesBackendException,
    detectFacesException,
    detectFacesResponse,
    faceCaptureConfig,
    faceCaptureImage,
    faceCaptureException,
    faceCaptureResponse,
    livenessConfig,
    enrollmentConfig,
    verificationConfig,
    livenessBackendException,
    livenessException,
    livenessResponse,
    livenessNotification,
    enrollmentResponse,
    verificationMatchResponse,
    verificationResponse,
    matchFacesConfig,
    matchFacesImage,
    matchFacesRequest,
    matchFacesDetectionFace,
    matchFacesBackendException,
    matchFacesException,
    matchFacesDetection,
    comparedFace,
    comparedFacesPair,
    matchFacesResponse,
    comparedFacesSplit,
    editGroupPersonsRequest,
    imageUpload,
    person,
    personGroup,
    personImage,
    searchPersonDetection,
    searchPersonImage,
    searchPerson,
    searchPersonRequest,
    searchPersonFilter,
} from './json'

compare('customization', customization, Customization.fromJson);
compare('point', point, Point.fromJson);
compare('rect', rect, Rect.fromJson);
compare('size', size, Size.fromJson);
compare('outputImageCrop', outputImageCrop, OutputImageCrop.fromJson);
compare('outputImageParams', outputImageParams, OutputImageParams.fromJson);
compare('imageQualityRange', imageQualityRange, ImageQualityRange.fromJson);
compare('imageQualityResult', imageQualityResult, ImageQualityResult.fromJson);
compare('imageQualityCharacteristic', imageQualityCharacteristic, ImageQualityCharacteristic.fromJson);
compare('faceSDKVersion', faceSDKVersion, FaceSDKVersion.fromJson);
compare('initConfig', initConfig, InitConfig.fromJson);
compare('licenseException', licenseException, LicenseException.fromJson);
compare('initException', initException, InitException.fromJson);
compare('detectFacesAttributeResult', detectFacesAttributeResult, DetectFacesAttributeResult.fromJson);
compare('detectFaceResult', detectFaceResult, DetectFaceResult.fromJson);
compare('detectFacesConfig', detectFacesConfig, DetectFacesConfig.fromJson);
compare('detectFacesRequest', detectFacesRequest, DetectFacesRequest.fromJson);
compare('detectFacesBackendException', detectFacesBackendException, DetectFacesBackendException.fromJson);
compare('detectFacesException', detectFacesException, DetectFacesException.fromJson);
compare('detectFacesResponse', detectFacesResponse, DetectFacesResponse.fromJson);
compare('faceCaptureConfig', faceCaptureConfig, FaceCaptureConfig.fromJson);
compare('faceCaptureImage', faceCaptureImage, FaceCaptureImage.fromJson);
compare('faceCaptureException', faceCaptureException, FaceCaptureException.fromJson);
compare('faceCaptureResponse', faceCaptureResponse, FaceCaptureResponse.fromJson);
compare('livenessConfig', livenessConfig, LivenessConfig.fromJson);
compare('enrollmentConfig', enrollmentConfig, EnrollmentConfig.fromJson);
compare('verificationConfig', verificationConfig, VerificationConfig.fromJson);
compare('livenessBackendException', livenessBackendException, LivenessBackendException.fromJson);
compare('livenessException', livenessException, LivenessException.fromJson);
compare('livenessResponse', livenessResponse, LivenessResponse.fromJson);
compare('livenessNotification', livenessNotification, LivenessNotification.fromJson);
compare('enrollmentResponse', enrollmentResponse, EnrollmentResponse.fromJson);
compare('verificationMatchResponse', verificationMatchResponse, VerificationMatchResponse.fromJson);
compare('verificationResponse', verificationResponse, VerificationResponse.fromJson);
compare('matchFacesConfig', matchFacesConfig, MatchFacesConfig.fromJson);
compare('matchFacesImage', matchFacesImage, MatchFacesImage.fromJson);
compare('matchFacesRequest', matchFacesRequest, MatchFacesRequest.fromJson);
compare('matchFacesDetectionFace', matchFacesDetectionFace, MatchFacesDetectionFace.fromJson);
compare('matchFacesBackendException', matchFacesBackendException, MatchFacesBackendException.fromJson);
compare('matchFacesException', matchFacesException, MatchFacesException.fromJson);
compare('matchFacesDetection', matchFacesDetection, MatchFacesDetection.fromJson);
compare('comparedFace', comparedFace, ComparedFace.fromJson);
compare('comparedFacesPair', comparedFacesPair, ComparedFacesPair.fromJson);
compare('matchFacesResponse', matchFacesResponse, MatchFacesResponse.fromJson);
compare('comparedFacesSplit', comparedFacesSplit, ComparedFacesSplit.fromJson);
compare('editGroupPersonsRequest', editGroupPersonsRequest, EditGroupPersonsRequest.fromJson);
compare('imageUpload', imageUpload, ImageUpload.fromJson);
compare('person', person, Person.fromJson);
compare('personGroup', personGroup, PersonGroup.fromJson);
compare('personImage', personImage, PersonImage.fromJson);
compare('searchPersonDetection', searchPersonDetection, SearchPersonDetection.fromJson);
compare('searchPersonImage', searchPersonImage, SearchPersonImage.fromJson);
compare('searchPerson', searchPerson, SearchPerson.fromJson);
compare('searchPersonRequest', searchPersonRequest, SearchPersonRequest.fromJson);
compare('searchPersonFilter', searchPersonFilter, SearchPersonFilter.fromJson);
