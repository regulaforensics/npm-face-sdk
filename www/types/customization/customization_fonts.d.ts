import { Font}  from './font'

export class CustomizationFonts {
    set onboardingScreenStartButton(val: Font | null)
    set onboardingScreenTitleLabel(val: Font | null)
    set onboardingScreenSubtitleLabel(val: Font | null)
    set onboardingScreenMessageLabels(val: Font | null)
    set cameraScreenHintLabel(val: Font | null)
    set retryScreenRetryButton(val: Font | null)
    set retryScreenTitleLabel(val: Font | null)
    set retryScreenSubtitleLabel(val: Font | null)
    set retryScreenHintLabels(val: Font | null)
    set processingScreenLabel(val: Font | null)

    /** 
     * Allows you to deserialize object. 
     */
    static fromJson(jsonObject: Record<string, any>): CustomizationFonts
    /** 
     * Allows you to serialize object. 
     */
    toJson(): Record<string, any>
}