export class Font {
    get name(): string
    get size(): number | null
    get style(): FontStyle | null

    constructor(
        name: string,
        params?: {
            size?: number,
            style?: FontStyle
        }
    )

    static fromJson(jsonObject?: any): Font | null
}

export enum FontStyle {
    NORMAL,
    BOLD,
    ITALIC,
    BOLD_ITALIC,
}
