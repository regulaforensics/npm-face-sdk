#import "RNFaceSDK.h"

@implementation RNFaceSDK
RCT_EXPORT_MODULE();

static NSMutableArray<RCTResponseSenderBlock>* _firedCallbacks = nil;
- (NSMutableArray<RCTResponseSenderBlock>*)firedCallbacks {
    if (_firedCallbacks == nil) _firedCallbacks = @[].mutableCopy;
    return _firedCallbacks;
}

- (NSArray<NSString*>*)supportedEvents {
    return @[cameraSwitchEvent,
             livenessNotificationEvent,
             videoEncoderCompletionEvent,
             onCustomButtonTappedEvent];
}

static bool hasListeners;
- (void)startObserving { hasListeners = YES; }
- (void)stopObserving { hasListeners = NO; }

UIViewController*(^RFSWRootViewController)(void) = ^UIViewController*(){
    return RCTPresentedViewController();
};

RCT_EXPORT_METHOD(exec:(NSString*)method:(NSArray*)args:(RCTPromiseResolveBlock)resolve:(RCTPromiseRejectBlock)reject) {
    RFSWCallback callback = ^(id _Nullable data) {
        if ([self.firedCallbacks containsObject:resolve]) return;
        [self.firedCallbacks addObject:resolve];
        resolve([RFSWJSONConstructor toSendable:data]);
    };
    
    RFSWEventSender sendEvent = ^(NSString* event, id data) {
        dispatch_async(dispatch_get_main_queue(), ^{
            if (hasListeners) [self sendEventWithName:event body:[RFSWJSONConstructor toSendable:data]];
        });
    };
    
    [RFSWMain methodCall:method :args :callback :sendEvent];
}

@end
