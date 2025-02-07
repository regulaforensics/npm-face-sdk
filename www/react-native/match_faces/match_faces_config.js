export class MatchFacesConfig {
    processingMode

    constructor(params) {
        this.processingMode = params?.processingMode ?? ProcessingMode.ONLINE
    }
}

export const ProcessingMode = {
    ONLINE: 0,
    OFFLINE: 1,
}