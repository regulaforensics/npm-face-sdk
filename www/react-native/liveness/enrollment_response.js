import { Person } from '../person_database/person'
import { SearchPerson } from '../person_database/search_person'

export class EnrollmentResponse {
    enrolled
    person
    searchPersons

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new EnrollmentResponse()

        result.enrolled = jsonObject["enrolled"]
        result.person = Person.fromJson(jsonObject["person"])
        result.searchPersons = []
        if (jsonObject["searchPersons"] != null)
            for (const item of jsonObject["searchPersons"])
                result.searchPersons.push(SearchPerson.fromJson(item))

        return result
    }

    toJson() {
        return {
            "enrolled": this.enrolled,
            "person": this.person?.toJson(),
            "searchPersons": this.searchPersons?.map(e => e.toJson()),
        }
    }
}
