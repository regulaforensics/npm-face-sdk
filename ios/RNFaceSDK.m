#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNFaceSDK, RCTEventEmitter)

RCT_EXTERN_METHOD(exec: (NSString*)method
                  newArgs:(NSArray*)newArgs
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
