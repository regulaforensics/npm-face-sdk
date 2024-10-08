#import "CVDFaceSDK.h"

CVDFaceSDK* RFSWPlugin;
@implementation CVDFaceSDK

NSMutableDictionary<NSString*, NSString*>* _RFSWEventCallbackIds = nil;
- (NSMutableDictionary<NSString*, NSString*>*)eventCallbackIds {
    if (_RFSWEventCallbackIds == nil) _RFSWEventCallbackIds = @{}.mutableCopy;
    return _RFSWEventCallbackIds;
}

- (void) exec:(CDVInvokedUrlCommand*)command {
    RFSWPlugin = self;
    NSString* method = command.arguments[0];
    NSMutableArray* args = [NSMutableArray new];
    for (int i = 1; i < command.arguments.count; i++) [args addObject:command.arguments[i]];
    if ([method isEqualToString:@"setEvent"]) {
        self.eventCallbackIds[args[0]] = command.callbackId;
        return;
    }
    
    RFSWEventSender sendEvent = ^(NSString* callbackId, id data) {
        NSString* eventId = [RFSWPlugin.eventCallbackIds objectForKey:callbackId];
        if(eventId) callbackId = eventId;
        data = [RFSWJSONConstructor toSendable:data];
        CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:data];
        [result setKeepCallbackAsBool:YES];
        [RFSWPlugin.commandDelegate sendPluginResult:result callbackId:callbackId];
    };
    
    [RFSWMain methodCall:method :args :^(id data) { sendEvent(command.callbackId, data); } :sendEvent];
}

@end
