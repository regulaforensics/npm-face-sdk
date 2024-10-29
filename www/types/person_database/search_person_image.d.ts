/**
 * A Person Database object that represents Image result of Person Search.
 */
export class SearchPersonImage {
    /**
     * The similarity score.
     * From 0.0 to 1.0.
     */
    get similarity(): number

    /**
     * The similarity distance score.
     * The lower the distance, the higher the face's similarity.
     * From 0.0 to 2.0.
     */
    get distance(): number
    get path(): string
    get url(): string
    get contentType(): string | null
    get id(): string
    get metadata(): any
    get createdAt(): Date

    private constructor()
}
