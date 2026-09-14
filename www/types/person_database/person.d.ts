
/**
 * A Person Database object that represents Person.
 */
export class Person {
    id?: string | null

    get createdAt(): Date | null

    /**
     * Person name.
     * Updatable field.
     */
    name?: string | null

    /**
     * Person update date.
     */
    updatedAt?: Date | null

    /**
     * Array if Group IDs Person belongs to.
     */
    groups?: string[] | null

    /**
     * A free-form object containing Person extended attributes.
     * Updatable field.
     */
    metadata?: any | null

    externalId?: string | null

    expireAt?: Date | null

    ttl?: number | null
}
