export class Font {
    name?: string
    style?: number
    size?: number

    static fromJson(jsonObject?: any): Font | null
}

export enum FontStyle {
    NORMAL,
    BOLD,
    ITALIC,
    BOLD_ITALIC,
}