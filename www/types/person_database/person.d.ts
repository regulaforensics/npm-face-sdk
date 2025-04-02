
/**
 * A Person Database object that represents Person.
 */
export class Person {
    /**
     * Person name.
     * Updatable field.
     */
    name: string

    /**
     * Person update date.
     */
    get updatedAt(): Date

    /**
     * Array if Group IDs Person belongs to.
     */
    get groups(): string[]

    get id(): string

    /**
     * A free-form object containing Person extended attributes.
     * Updatable field.
     */
    metadata: any

    get createdAt(): Date

    private constructor()
}
