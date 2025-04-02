export class Person {
    name
    updatedAt
    groups
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new Person()

        result.name = jsonObject["name"]
        result.updatedAt = new Date(jsonObject["updatedAt"])
        result.groups = jsonObject["groups"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }
}
