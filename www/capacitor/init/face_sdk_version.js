export class FaceSDKVersion {
    api
    core
    coreMode

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new FaceSDKVersion()

        result.api = jsonObject["api"]
        result.core = jsonObject["core"]
        result.coreMode = jsonObject["coreMode"]

        return result
    }

    toJson() {
        return {
            "api": this.api,
            "core": this.core,
            "coreMode": this.coreMode,
        }
    }
}