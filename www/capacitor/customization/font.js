export class Font {
    name
    size
    style

    constructor(name, params) {
        this.name = name
        this.size = params?.size
        this.style = params?.style
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Font()

        result.name = jsonObject["name"]
        result.size = jsonObject["size"]
        result.style = jsonObject["style"]

        return result
    }

    toJson() {
        return {
            "name": this.name,
            "size": this.size,
            "style": this.style,
        }
    }
}

export const FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
}
