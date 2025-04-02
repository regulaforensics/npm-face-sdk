export class PageableItemList<T> {
    get items(): T[] | null
    get page(): number
    get totalPages(): number

    private constructor()
}
