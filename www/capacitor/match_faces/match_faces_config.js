export class MatchFacesConfig {
    processingMode
    locationTrackingEnabled

    constructor(params) {
        this.processingMode = params?.processingMode ?? ProcessingMode.ONLINE
        this.locationTrackingEnabled = params?.locationTrackingEnabled ?? true
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new MatchFacesConfig()

        result.processingMode = jsonObject["processingMode"]
        result.locationTrackingEnabled = jsonObject["locationTrackingEnabled"]

        return result
    }

    toJson() {
        return {
            "processingMode": this.processingMode,
            "locationTrackingEnabled": this.locationTrackingEnabled,
        }
    }
}

export const ProcessingMode = {
    ONLINE: 0,
    OFFLINE: 1,
}