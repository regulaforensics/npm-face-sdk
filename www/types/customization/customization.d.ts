import { CustomizationColors } from './customization_colors'
import { CustomizationFonts } from './customization_fonts'
import { CustomizationImages } from './customization_images'

/**  
 * Params that relate to the camera view controller customization and etc. 
 */
export class Customization {
    get colors(): CustomizationColors
    set colors(val: CustomizationColors)

    get fonts(): CustomizationFonts
    set fonts(val: CustomizationFonts)

    get images(): CustomizationImages
    set images(val: CustomizationImages)

    /**
     * Immutable property. Use setter instead of editing.
     */
    get uiCustomizationLayer(): Record<string, any> | null
    set uiCustomizationLayer(val: Record<string, any> | null)

    /** 
     * Set onClick listener for buttons from {@link uiCustomizationLayer}. 
     */
    set onCustomButtonTapped(completion: CustomButtonTappedCompletion)

    /** 
     * Allows you to deserialize object. 
     */
    static fromJson(jsonObject: Record<string, any>): Customization
    /** 
     * Allows you to serialize object. 
     */
    toJson(): Record<string, any>
}


/**
 * Callback for receiving signal, when a custom button,
 * configured in {@link Customization.uiCustomizationLayer}, is pressed.
 * 
 * @param tag button id, indication which button was pressed.
 */
export type CustomButtonTappedCompletion = (tag: number) => void
