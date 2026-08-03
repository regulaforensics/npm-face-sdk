export class EnrollmentRequest {
    readonly externalId: string
    readonly groupId?: string
    readonly trustedImage?: string
    readonly trustedImageUrl?: string

    static withImage(
        externalId: string,
        trustedImage: string,
        options?: {
            groupId?: string
        }
    ): EnrollmentRequest;

    static withImageUrl(
        externalId: string,
        trustedImageUrl: string,
        options?: {
            groupId?: string
        }
    ): EnrollmentRequest;

    private constructor()
}
