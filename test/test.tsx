import { compare } from './utils'
import { ComparedFace, ComparedFacesPair, ComparedFacesSplit, Customization, DetectFaceResult, DetectFacesAttributeResult, DetectFacesBackendException, DetectFacesConfig, DetectFacesException, DetectFacesRequest, DetectFacesResponse, EditGroupPersonsRequest, FaceCaptureConfig, FaceCaptureException, FaceCaptureImage, FaceCaptureResponse, FaceSDKVersion, ImageQualityCharacteristic, ImageQualityRange, ImageQualityResult, ImageUpload, InitConfig, InitException, LicenseException, LivenessBackendException, LivenessConfig, LivenessException, LivenessNotification, LivenessResponse, MatchFacesBackendException, MatchFacesConfig, MatchFacesDetection, MatchFacesDetectionFace, MatchFacesException, MatchFacesImage, MatchFacesRequest, MatchFacesResponse, OutputImageCrop, OutputImageParams, Person, PersonGroup, PersonImage, Point, Rect, SearchPerson, SearchPersonDetection, SearchPersonImage, SearchPersonRequest, Size } from '@regulaforensics/face-sdk/www/capacitor'
import { comparedFace, comparedFacesPair, comparedFacesSplit, customization, detectFaceResult, detectFacesAttributeResult, detectFacesBackendException, detectFacesConfig, detectFacesException, detectFacesRequest, detectFacesResponse, editGroupPersonsRequest, faceCaptureConfig, faceCaptureException, faceCaptureImage, faceCaptureResponse, faceSDKVersion, imageQualityCharacteristic, imageQualityRange, imageQualityResult, imageUpload, initConfig, initException, licenseException, livenessBackendException, livenessConfig, livenessException, livenessNotification, livenessResponse, matchFacesBackendException, matchFacesConfig, matchFacesDetection, matchFacesDetectionFace, matchFacesException, matchFacesImage, matchFacesRequest, matchFacesResponse, outputImageCrop, outputImageParams, person, personGroup, personImage, point, rect, searchPerson, searchPersonDetection, searchPersonImage, searchPersonRequest, size } from './json'

compare('customization', customization, Customization.fromJson)

compare('point', point, Point.fromJson)
compare('rect', rect, Rect.fromJson)
compare('size', size, Size.fromJson)
compare('outputImageCrop', outputImageCrop, OutputImageCrop.fromJson)
compare('outputImageParams', outputImageParams, OutputImageParams.fromJson)

compare('imageQualityRange', imageQualityRange, ImageQualityRange.fromJson)
compare('imageQualityResult', imageQualityResult, ImageQualityResult.fromJson)
compare('imageQualityCharacteristic', imageQualityCharacteristic, ImageQualityCharacteristic.fromJson)

compare('faceSDKVersion', faceSDKVersion, FaceSDKVersion.fromJson)
compare('initConfig', initConfig, InitConfig.fromJson)
compare('licenseException', licenseException, LicenseException.fromJson)
compare('initException', initException, InitException.fromJson)

compare('detectFacesAttributeResult', detectFacesAttributeResult, DetectFacesAttributeResult.fromJson)
compare('detectFaceResult', detectFaceResult, DetectFaceResult.fromJson)
compare('detectFacesConfig', detectFacesConfig, DetectFacesConfig.fromJson)
compare('detectFacesRequest', detectFacesRequest, DetectFacesRequest.fromJson)
compare('detectFacesBackendException', detectFacesBackendException, DetectFacesBackendException.fromJson)
compare('detectFacesException', detectFacesException, DetectFacesException.fromJson)
compare('detectFacesResponse', detectFacesResponse, DetectFacesResponse.fromJson)

compare('faceCaptureConfig', faceCaptureConfig, FaceCaptureConfig.fromJson)
compare('faceCaptureImage', faceCaptureImage, FaceCaptureImage.fromJson)
compare('faceCaptureException', faceCaptureException, FaceCaptureException.fromJson)
compare('faceCaptureResponse', faceCaptureResponse, FaceCaptureResponse.fromJson)

compare('livenessConfig', livenessConfig, LivenessConfig.fromJson)
compare('livenessBackendException', livenessBackendException, LivenessBackendException.fromJson)
compare('livenessException', livenessException, LivenessException.fromJson)
compare('livenessResponse', livenessResponse, LivenessResponse.fromJson)
compare('livenessNotification', livenessNotification, LivenessNotification.fromJson)

compare('matchFacesConfig', matchFacesConfig, MatchFacesConfig.fromJson)
compare('matchFacesImage', matchFacesImage, MatchFacesImage.fromJson)
compare('matchFacesRequest', matchFacesRequest, MatchFacesRequest.fromJson)
compare('matchFacesDetectionFace', matchFacesDetectionFace, MatchFacesDetectionFace.fromJson)
compare('matchFacesBackendException', matchFacesBackendException, MatchFacesBackendException.fromJson)
compare('matchFacesException', matchFacesException, MatchFacesException.fromJson)
compare('matchFacesDetection', matchFacesDetection, MatchFacesDetection.fromJson)
compare('comparedFace', comparedFace, ComparedFace.fromJson)
compare('comparedFacesPair', comparedFacesPair, ComparedFacesPair.fromJson)
compare('matchFacesResponse', matchFacesResponse, MatchFacesResponse.fromJson)
compare('comparedFacesSplit', comparedFacesSplit, ComparedFacesSplit.fromJson)

compare('editGroupPersonsRequest', editGroupPersonsRequest, EditGroupPersonsRequest.fromJson)
compare('imageUpload', imageUpload, ImageUpload.fromJson)
compare('person', person, Person.fromJson)
compare('personGroup', personGroup, PersonGroup.fromJson)
compare('personImage', personImage, PersonImage.fromJson)
compare('searchPersonDetection', searchPersonDetection, SearchPersonDetection.fromJson)
compare('searchPersonImage', searchPersonImage, SearchPersonImage.fromJson)
compare('searchPerson', searchPerson, SearchPerson.fromJson)
compare('searchPersonRequest', searchPersonRequest, SearchPersonRequest.fromJson)
