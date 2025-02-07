import { SearchPersonImage } from './search_person_image'
import { SearchPersonDetection } from './search_person_detection'

/**
 * A Person Database object that represents th result of Person search.
 */
export class SearchPerson {
    /**
     * Array of images where the Person is found.
     */
    get images(): SearchPersonImage[]

    /**
     * Detection data relative to the search input image.
     */
    get detection(): SearchPersonDetection | null

    name: string

    get updatedAt(): Date

    get groups(): string[]

    get id(): string

    metadata: any
    
    get createdAt(): Date

    private constructor()
}
