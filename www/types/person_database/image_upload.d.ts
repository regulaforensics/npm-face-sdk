/**
 * An object that represents uploaded image with its settings.
 */
export class ImageUpload {
    /**
     * Creates an object of {@link ImageUpload} using an image.
     * 
     * @param imageData - Image base64.
     */
    static withImageData(imageData: string): ImageUpload

    /**
     * Creates an object of {@link ImageUpload} using an image url.
     * 
     * @param imageUrl - Image url.
     */
    static withImageUrl(imageUrl: string): ImageUpload

    private constructor()
}
