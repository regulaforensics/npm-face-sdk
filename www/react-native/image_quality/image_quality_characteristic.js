import { ImageQualityRange } from './image_quality_range'

export class ImageQualityCharacteristic {
    characteristicName
    recommendedRange
    customRange
    color

    static _create(name, params) {
        var result = new ImageQualityCharacteristic()
        result.characteristicName = name
        result.recommendedRange = params?.recommended
        result.customRange = params?.custom
        result.color = params?.color
        return result
    }

    withCustomRange(min, max) {
        this.customRange = new ImageQualityRange(min, max)
        return this
    }
    withCustomValue(value) {
        this.customRange = ImageQualityRange.withValue(value)
        return this
    }
}