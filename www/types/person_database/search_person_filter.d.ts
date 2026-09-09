export class SearchPersonFilter {
    groups: string[]
    threshold: number
    limit: number
    get fieldName(): string | null
    get fieldValues(): string[] | null
    get exclude(): boolean

    constructor(options?: {
        groups?: string[]
        threshold?: number
        limit?: number
    })

    filterField(fieldName: string, fieldValues: string[], options?: { exclude?: boolean }): void
}
