export class SearchPersonFilter {
    groups
    threshold
    limit
    fieldName
    fieldValues
    exclude

    constructor(options) {
        this.groups = options?.groups ?? []
        this.threshold = options?.threshold ?? 0
        this.limit = options?.limit ?? 1
    }

    filterField(fieldName, fieldValues, options) {
        this.fieldName = fieldName
        this.fieldValues = fieldValues
        this.exclude = options?.exclude ?? false
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        var result = new SearchPersonFilter({
            groups: jsonObject["groups"],
            threshold: jsonObject["threshold"],
            limit: jsonObject["limit"]
        })
        result.fieldName = jsonObject["fieldName"];
        result.fieldValues = jsonObject["fieldValues"];
        result.exclude = jsonObject["exclude"];
        return result
    }

    toJson() {
        return {
            "groups": this.groups,
            "threshold": this.threshold,
            "limit": this.limit,
            "fieldName": this.fieldName,
            "fieldValues": this.fieldValues,
            "exclude": this.exclude,
        }
    }
}
