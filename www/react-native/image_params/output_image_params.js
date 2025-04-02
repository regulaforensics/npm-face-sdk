export class OutputImageParams {
    crop
    backgroundColor

    constructor(params) {
        this.crop = params?.crop
        this.backgroundColor = params?.backgroundColor
    }
}