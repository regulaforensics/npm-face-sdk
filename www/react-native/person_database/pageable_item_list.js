export class PageableItemList {
    items
    page
    totalPages

    static fromJson(jsonObject, fromJSON) {
        if (jsonObject == null) return null
        var result = new PageableItemList()

        if (jsonObject["items"] != null) {
            result.items = []
            for (var item of jsonObject["items"]) {
                var temp = fromJSON(item)
                if (temp != null) result.items.push(temp)
            }
        }
        result.page = jsonObject["page"]
        result.totalPages = jsonObject["totalPages"]

        return result
    }

    toJson() {
        return {
            "items": this.items?.map(e => e.toJson()),
            "page": this.page,
            "totalPages": this.totalPages,
        }
    }
}
