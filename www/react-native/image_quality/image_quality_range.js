export class ImageQualityRange {
    min
    max

    constructor(min, max) {
        this.min = min
        this.max = max
    }

    static withValue(value) {
        var result = new ImageQualityRange()
        result.min = value
        result.max = value
        return result
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ImageQualityRange()

        result.min = jsonObject["min"]
        result.max = jsonObject["max"]

        return result
    }

    toJson() {
        return {
            "min": this.min,
            "max": this.max,
        }
    }
}