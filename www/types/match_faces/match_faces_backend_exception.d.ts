export class MatchFacesBackendException {
    get code(): number
    get message(): string

    private constructor()
}
