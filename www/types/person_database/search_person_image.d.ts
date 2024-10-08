export class SearchPersonImage {
    get similarity(): number
    get distance(): number
    get path(): string
    get url(): string
    get contentType(): string | null
    get id(): string
    get metadata(): any
    get createdAt(): Date

    private constructor()
}
