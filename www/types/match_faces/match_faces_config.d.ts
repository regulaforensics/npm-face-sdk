export class MatchFacesConfig {
    processingMode: ProcessingMode

    constructor(
        params?: {
            processingMode?: ProcessingMode
        }
    )
}

export enum ProcessingMode {
    ONLINE,
    OFFLINE,
}