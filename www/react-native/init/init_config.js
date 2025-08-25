export class InitConfig {
    license
    licenseUpdate
    useBleDevice

    static withBleDevice() { 
        var result = new InitConfig()
        result.useBleDevice = true
        return result
     }

    constructor(license, params) {
        this.license = license
        this.licenseUpdate = params?.licenseUpdate
        this.useBleDevice = false
    }
}