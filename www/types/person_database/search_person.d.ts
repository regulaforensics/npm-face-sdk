import { SearchPersonImage } from './search_person_image'
import { SearchPersonDetection } from './search_person_detection'

export class SearchPerson {
    get images(): SearchPersonImage[]
    get detection(): SearchPersonDetection | null
    name: string
    get updatedAt(): Date
    get groups(): string[]
    get id(): string
    metadata: any
    get createdAt(): Date

    private constructor()
}
