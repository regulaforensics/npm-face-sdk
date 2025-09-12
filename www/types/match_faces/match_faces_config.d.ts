export class MatchFacesConfig {
    processingMode: ProcessingMode
    locationTrackingEnabled: boolean

    constructor(
        params?: {
            processingMode?: ProcessingMode
            locationTrackingEnabled?: boolean
        }
    )
}

export enum ProcessingMode {
    ONLINE,
    OFFLINE,
}