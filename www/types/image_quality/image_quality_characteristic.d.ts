/**
 * Image Quality parameter to include in {@link DetectFacesConfig} as {@link DetectFacesConfig.customQuality}.
 */
export class ImageQualityCharacteristic {
    withCustomRange(min: number, max: number): ImageQualityCharacteristic
    withCustomValue(value: number): ImageQualityCharacteristic
}