export class PersonGroup {
    name: string
    get id(): string
    metadata: any
    get createdAt(): Date

    private constructor()
}
