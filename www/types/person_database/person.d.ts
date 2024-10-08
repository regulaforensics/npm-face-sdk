export class Person {
    name: string
    get updatedAt(): Date
    get groups(): string[]
    get id(): string
    metadata: any
    get createdAt(): Date

    private constructor()
}
