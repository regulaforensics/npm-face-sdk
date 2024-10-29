export class FaceSDKVersion {
    /**
     * Version of the API module.
     */
    get api(): string | null
    /**
     * Version of the CORE module.
     */
    get core(): string | null
    /**
     * CORE module variant.
     */
    get coreMode(): string | null

    private constructor()
}