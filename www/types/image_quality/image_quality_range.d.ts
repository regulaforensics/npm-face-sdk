export class ImageQualityRange {
    get min(): number
    get max(): number

    constructor(min: number, max: number)

    static withValue(value: number): ImageQualityRange
}