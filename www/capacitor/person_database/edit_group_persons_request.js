export class EditGroupPersonsRequest {
    personIdsToAdd
    personIdsToRemove

    constructor(params) {
        this.personIdsToAdd = params?.personIdsToAdd
        this.personIdsToRemove = params?.personIdsToRemove
    }
}
