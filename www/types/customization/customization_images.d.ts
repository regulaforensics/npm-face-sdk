export class CustomizationImages {
    set onboardingScreenCloseButton(val: string)
    set onboardingScreenIllumination(val: string)
    set onboardingScreenAccessories(val: string)
    set onboardingScreenCameraLevel(val: string)
    set cameraScreenCloseButton(val: string)
    set cameraScreenLightOnButton(val: string)
    set cameraScreenLightOffButton(val: string)
    set cameraScreenSwitchButton(val: string)
    set retryScreenCloseButton(val: string)
    set retryScreenHintEnvironment(val: string)
    set retryScreenHintSubject(val: string)
    set processingScreenCloseButton(val: string)
    set successScreenImage(val: string)

    /** 
     * Allows you to deserialize object. 
     */
    static fromJson(jsonObject: Record<string, string>): CustomizationImages
    /** 
     * Allows you to serialize object. 
     */
    toJson(): Record<string, string>
}