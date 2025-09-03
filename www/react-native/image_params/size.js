export class Size {
    width
    height

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new Size(jsonObject["width"], jsonObject["height"])    
    }

    toJson() {
        return {
            "width": this.width,
            "height": this.height,
        }
    }
}