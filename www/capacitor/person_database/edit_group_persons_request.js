export class EditGroupPersonsRequest {
    personIdsToAdd
    personIdsToRemove

    constructor(params) {
        this.personIdsToAdd = params?.personIdsToAdd
        this.personIdsToRemove = params?.personIdsToRemove
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
