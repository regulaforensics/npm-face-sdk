import { exec } from '../internal/bridge'
import { Person } from './person'
import { PersonImage } from './person_image'
import { PageableItemList } from './pageable_item_list'
import { PersonGroup } from './person_group'
import { SearchPerson } from './search_person'

export class PersonDatabase {
    async createPerson(name, params) {
        var response = await exec("createPerson", [name, params?.groupIds, params?.metadata])
        return this._itemResponseFromJson(response, Person.fromJson)
    }

    async updatePerson(person) {
        var response = await exec("updatePerson", [person])
        return this._successResponseFromJson(response)
    }

    async deletePerson(personId) {
        var response = await exec("deletePerson", [personId])
        return this._successResponseFromJson(response)
    }

    async getPerson(personId) {
        var response = await exec("getPerson", [personId])
        return this._itemResponseFromJson(response, Person.fromJson)
    }

    async addPersonImage(personId, image) {
        var response = await exec("addPersonImage", [personId, image])
        return this._itemResponseFromJson(response, PersonImage.fromJson)
    }

    async deletePersonImage(personId, imageId) {
        var response = await exec("deletePersonImage", [personId, imageId])
        return this._successResponseFromJson(response)
    }

    async getPersonImage(personId, imageId) {
        var response = await exec("getPersonImage", [personId, imageId])
        return this._itemResponseFromJson(response, data => data)
    }

    async getPersonImages(personId) {
        var response = await exec("getPersonImages", [personId])
        return this._listResponseFromJson(response, PersonImage.fromJson)
    }

    async getPersonImagesForPage(personId, page, size) {
        var response = await exec("getPersonImagesForPage", [personId, page, size])
        return this._listResponseFromJson(response, PersonImage.fromJson)
    }

    async createGroup(name, params) {
        var response = await exec("createGroup", [name, params?.metadata])
        return this._itemResponseFromJson(response, PersonGroup.fromJson)
    }

    async updateGroup(group) {
        var response = await exec("updateGroup", [group])
        return this._successResponseFromJson(response)
    }

    async editPersonsInGroup(groupId, request) {
        var response = await exec("editPersonsInGroup", [groupId, request])
        return this._successResponseFromJson(response)
    }

    async deleteGroup(groupId) {
        var response = await exec("deleteGroup", [groupId])
        return this._successResponseFromJson(response)
    }

    async getGroup(groupId) {
        var response = await exec("getGroup", [groupId])
        return this._itemResponseFromJson(response, PersonGroup.fromJson)
    }

    async getGroups() {
        var response = await exec("getGroups", [])
        return this._listResponseFromJson(response, PersonGroup.fromJson)
    }

    async getGroupsForPage(page, size) {
        var response = await exec("getGroupsForPage", [page, size])
        return this._listResponseFromJson(response, PersonGroup.fromJson)
    }

    async getPersonGroups(personId) {
        var response = await exec("getPersonGroups", [personId])
        return this._listResponseFromJson(response, PersonGroup.fromJson)
    }

    async getPersonGroupsForPage(personId, page, size) {
        var response = await exec("getPersonGroupsForPage", [personId, page, size])
        return this._listResponseFromJson(response, PersonGroup.fromJson)
    }

    async getPersonsInGroup(groupId) {
        var response = await exec("getPersonsInGroup", [groupId])
        return this._listResponseFromJson(response, Person.fromJson)
    }

    async getPersonsInGroupForPage(groupId, page, size) {
        var response = await exec("getPersonsInGroupForPage", [groupId, page, size])
        return this._listResponseFromJson(response, Person.fromJson)
    }

    async searchPerson(request) {
        var response = await exec("searchPerson", [request])

        var jsonObject = JSON.parse(response)
        var data = null
        if (jsonObject["data"] != null) {
            data = []
            for (var item of jsonObject["data"])
                data.push(SearchPerson.fromJson(item))
        }
        var error = jsonObject["error"]

        return [data, error]
    }

    _successResponseFromJson(jsonString) {
        var jsonObject = JSON.parse(jsonString)
        var data = jsonObject["data"]
        var error = jsonObject["error"]
        var success = data ?? false
        return [success, error]
    }

    _itemResponseFromJson(jsonString, fromJSON) {
        var jsonObject = JSON.parse(jsonString)
        var data = fromJSON(jsonObject["data"])
        var error = jsonObject["error"]
        return [data, error]
    }

    _listResponseFromJson(jsonString, fromJSON) {
        var jsonObject = JSON.parse(jsonString)
        var data = PageableItemList.fromJson(jsonObject["data"], fromJSON)
        var error = jsonObject["error"]
        return [data, error]
    }
}
