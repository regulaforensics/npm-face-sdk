export class Font {
    /**
     * Font family.
     * 
     * Beware that Android and iOS have diffrent font names,
     * so you will have to use if condition.
     */
    get name(): string

    /** 
     * Font size. 
     */
    get size(): number | null
    
    /**
     * Font style.
     * 
     * Android only.
     */
    get style(): FontStyle | null

    constructor(
        name: string,
        params?: {
            size?: number,
            style?: FontStyle
        }
    )

    /** 
     * Allows you to deserialize object. 
     */
    static fromJson(jsonObject?: any): Font | null
}

export enum FontStyle {
    NORMAL,
    BOLD,
    ITALIC,
    BOLD_ITALIC,
}
