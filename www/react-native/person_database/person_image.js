import { dateToString } from '../internal/bridge'

export class PersonImage {
    path
    url
    contentType
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new PersonImage()

        result.path = jsonObject["path"]
        result.url = jsonObject["url"]
        result.contentType = jsonObject["contentType"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }

    toJson() {
        return {
            "path": this.path,
            "url": this.url,
            "contentType": this.contentType,
            "id": this.id,
            "metadata": this.metadata,
            "createdAt": dateToString(this.createdAt),
        }
    }
}
