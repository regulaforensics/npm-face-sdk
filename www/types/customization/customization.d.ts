import { CustomizationColors } from './customization_colors'
import { CustomizationFonts } from './customization_fonts'
import { CustomizationImages } from './customization_images'

export class Customization {
    get colors(): CustomizationColors
    set colors(val: CustomizationColors)

    get fonts(): CustomizationFonts
    set fonts(val: CustomizationFonts)

    get images(): CustomizationImages
    set images(val: CustomizationImages)

    get uiCustomizationLayer(): Record<string, any> | null
    set uiCustomizationLayer(val: Record<string, any> | null)

    set onCustomButtonTapped(completion: CustomButtonTappedCompletion)

    static fromJson(jsonObject: Record<string, any>): Customization
    toJson(): Record<string, any>
}

export type CustomButtonTappedCompletion = (tag: number) => void
