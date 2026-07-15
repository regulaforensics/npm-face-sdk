export class MatchFacesConfig {
    processingMode: ProcessingMode
    locationTrackingEnabled: boolean

    constructor(
        options?: {
            processingMode?: ProcessingMode
            locationTrackingEnabled?: boolean
        }
    )
}

export enum ProcessingMode {
    ONLINE,
    OFFLINE,
}