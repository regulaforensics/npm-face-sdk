export class PersonGroup {
    name
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new PersonGroup()

        result.name = jsonObject["name"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}
