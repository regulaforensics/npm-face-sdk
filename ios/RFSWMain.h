#import "RFSWJSONConstructor.h"
@import FaceSDK;

typedef void (^RFSWCallback)(id _Nullable response);
typedef void (^RFSWEventSender)(NSString* _Nonnull event, id _Nullable data);

@interface RFSWMain: NSObject<RFSURLRequestInterceptingDelegate,
                              RFSVideoUploadingDelegate,
                              RFSCustomizationActionDelegate,
                              RFSFaceCaptureDelegate,
                              RFSLivenessDelegate>

+(void)methodCall:(NSString* _Nonnull)method
                 :(NSArray* _Nonnull)args
                 :(RFSWCallback _Nonnull)callback
                 :(RFSWEventSender _Nonnull)eventSender;

@end

static NSString* _Nonnull RFSWCameraSwitchEvent = @"cameraSwitchEvent";
static NSString* _Nonnull RFSWLivenessNotificationEvent = @"livenessNotificationEvent";
static NSString* _Nonnull RFSWVideoEncoderCompletionEvent = @"video_encoder_completion";
static NSString* _Nonnull RFSWOnCustomButtonTappedEvent = @"onCustomButtonTappedEvent";
