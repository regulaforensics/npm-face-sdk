import { Person } from '../person_database/person'
import { SearchPerson } from '../person_database/search_person'

export class EnrollmentResponse {
    readonly enrolled: boolean
    readonly person: Person | null
    readonly searchPersons: Array<SearchPerson> | null

    private constructor()
}
