import { Person } from './person'
import { PersonImage } from './person_image'
import { ImageUpload } from './image_upload'
import { PageableItemList } from './pageable_item_list'
import { PersonGroup } from './person_group'
import { EditGroupPersonsRequest } from './edit_group_persons_request'
import { SearchPersonRequest } from './search_person_request'
import { SearchPerson } from './search_person'

/**
 * Represents Regula Database layer and is the entry point for Person Database operations.
 */
export class PersonDatabase {
    createPerson(
        name: string,
        params?: {
            groupIds?: string[],
            metadata?: any,
        }
    ): Promise<[Person | null, string | null]>

    updatePerson(person: Person): Promise<[boolean, string | null]>

    deletePerson(personId: string): Promise<[boolean, string | null]>

    getPerson(personId: string): Promise<[Person | null, string | null]>

    addPersonImage(
        personId: string,
        image: ImageUpload
    ): Promise<[PersonImage | null, string | null]>

    deletePersonImage(
        personId: string,
        imageId: string
    ): Promise<[boolean, string | null]>

    getPersonImage(
        personId: string,
        imageId: string
    ): Promise<[string | null, string | null]>

    getPersonImages(personId: string): Promise<[PageableItemList<PersonImage>, string | null]>

    getPersonImagesForPage(
        personId: string,
        page: number,
        size: number
    ): Promise<[PageableItemList<PersonImage>, string | null]>

    createGroup(
        name: string,
        params?: {
            metadata?: any,
        }
    ): Promise<[PersonGroup | null, string | null]>

    updateGroup(group: PersonGroup): Promise<[boolean, string | null]>

    editPersonsInGroup(
        groupId: string,
        request: EditGroupPersonsRequest
    ): Promise<[boolean, string | null]>

    deleteGroup(groupId: string): Promise<[boolean, string | null]>

    getGroup(groupId: string): Promise<[PersonGroup | null, string | null]>

    getGroups(): Promise<[PageableItemList<PersonGroup>, string | null]>

    getGroupsForPage(
        page: number,
        size: number
    ): Promise<[PageableItemList<PersonGroup>, string | null]>

    getPersonGroups(personId: string): Promise<[PageableItemList<PersonGroup>, string | null]>

    getPersonGroupsForPage(
        personId: string,
        page: number,
        size: number
    ): Promise<[PageableItemList<PersonGroup>, string | null]>

    getPersonsInGroup(groupId: string): Promise<[PageableItemList<Person>, string | null]>

    getPersonsInGroupForPage(
        groupId: string,
        page: number,
        size: number
    ): Promise<[PageableItemList<Person>, string | null]>

    searchPerson(request: SearchPersonRequest): Promise<[SearchPerson[] | null, string | null]>

    private constructor()
}
