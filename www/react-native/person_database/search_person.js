import { dateToString } from '../internal/bridge'
import { SearchPersonImage } from './search_person_image'
import { SearchPersonDetection } from './search_person_detection'

export class SearchPerson {
    images = []
    detection
    name
    updatedAt
    groups
    id
    metadata
    createdAt

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new SearchPerson()

        if (jsonObject["images"] != null)
            for (var item of jsonObject["images"])
                result.images.push(SearchPersonImage.fromJson(item))
        result.detection = SearchPersonDetection.fromJson(jsonObject["detection"])
        result.name = jsonObject["name"]
        result.updatedAt = new Date(jsonObject["updatedAt"])
        result.groups = jsonObject["groups"]
        result.id = jsonObject["id"]
        result.metadata = jsonObject["metadata"]
        result.createdAt = new Date(jsonObject["createdAt"])

        return result
    }

    toJson() {
        return {
            "images": this.images?.map(e => e.toJson()),
            "detection": this.detection?.toJson(),
            "name": this.name,
            "updatedAt": dateToString(this.updatedAt),
            "groups": this.groups,
            "id": this.id,
            "metadata": this.metadata,
            "createdAt": dateToString(this.createdAt),
        }
    }
}
