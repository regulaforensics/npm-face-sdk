export class InitConfig {
    license
    licenseUpdate

    constructor(license, params) {
        this.license = license
        this.licenseUpdate = params?.licenseUpdate
    }
}