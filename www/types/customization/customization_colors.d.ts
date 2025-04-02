export class CustomizationColors {
    set onboardingScreenStartButtonBackground(val: number)
    set onboardingScreenStartButtonTitle(val: number)
    set onboardingScreenBackground(val: number)
    set onboardingScreenTitleLabelText(val: number)
    set onboardingScreenSubtitleLabelText(val: number)
    set onboardingScreenMessageLabelsText(val: number)
    set cameraScreenStrokeNormal(val: number)
    set cameraScreenStrokeActive(val: number)
    set cameraScreenSectorTarget(val: number)
    set cameraScreenSectorActive(val: number)
    set cameraScreenFrontHintLabelBackground(val: number)
    set cameraScreenFrontHintLabelText(val: number)
    set cameraScreenBackHintLabelBackground(val: number)
    set cameraScreenBackHintLabelText(val: number)
    set cameraScreenLightToolbarTint(val: number)
    set cameraScreenDarkToolbarTint(val: number)
    set retryScreenBackground(val: number)
    set retryScreenRetryButtonBackground(val: number)
    set retryScreenRetryButtonTitle(val: number)
    set retryScreenTitleLabelText(val: number)
    set retryScreenSubtitleLabelText(val: number)
    set retryScreenHintLabelsText(val: number)
    set processingScreenBackground(val: number)
    set processingScreenProgress(val: number)
    set processingScreenTitleLabel(val: number)
    set successScreenBackground(val: number)

    /** 
     * Allows you to deserialize object. 
     */
    static fromJson(jsonObject: Record<string, number>): CustomizationColors
    /** 
     * Allows you to serialize object. 
     */
    toJson(): Record<string, number>
}