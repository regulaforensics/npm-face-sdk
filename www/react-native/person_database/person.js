import { dateToString } from '../internal/bridge'

export class Person {
    id
    createdAt
    name
    updatedAt
    groups
    metadata
    externalId
    expireAt
    ttl

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new Person()

        result.id = jsonObject["id"]
        result.createdAt = jsonObject["createdAt"] === null ? null : new Date(jsonObject["createdAt"]);
        result.name = jsonObject["name"]
        result.updatedAt = jsonObject["updatedAt"] === null ? null : new Date(jsonObject["updatedAt"]);
        result.groups = jsonObject["groups"]
        result.metadata = jsonObject["metadata"]
        result.externalId = jsonObject["externalId"]
        result.expireAt = jsonObject["expireAt"] === null ? null : new Date(jsonObject["expireAt"]);
        result.ttl = jsonObject["ttl"]

        return result
    }

    toJson() {
        return {
            "id": this.id,
            "createdAt": dateToString(this.createdAt),
            "name": this.name,
            "updatedAt": dateToString(this.updatedAt),
            "groups": this.groups,
            "metadata": this.metadata,
            "externalId": this.externalId,
            "expireAt": dateToString(this.expireAt),
            "ttl": this.ttl,
        }
    }
}
