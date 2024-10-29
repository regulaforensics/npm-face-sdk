/**
 * Person Database object that represents Group of {@link Person}.
 */
export class PersonGroup {
    /**
     * PersonGroup name.
     * Updatable field.
     */
    name: string

    get id(): string

    /**
     * A free-form object containing Group extended attributes.
     * Updatable field.
     */
    metadata: any

    get createdAt(): Date

    private constructor()
}
