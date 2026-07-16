export class EditGroupPersonsRequest {
    personIdsToAdd
    personIdsToRemove

    constructor(options) {
        this.personIdsToAdd = options?.personIdsToAdd
        this.personIdsToRemove = options?.personIdsToRemove
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        return new EditGroupPersonsRequest({
            personIdsToAdd: jsonObject["personIdsToAdd"],
            personIdsToRemove: jsonObject["personIdsToRemove"],
        })
    }

    toJson() {
        return {
            "personIdsToAdd": this.personIdsToAdd,
            "personIdsToRemove": this.personIdsToRemove,
        }
    }
}
