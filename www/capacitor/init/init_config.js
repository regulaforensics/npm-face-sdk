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

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new InitConfig()

        result.license = jsonObject["license"]
        result.licenseUpdate = jsonObject["licenseUpdate"]
        result.useBleDevice = jsonObject["useBleDevice"]

        return result
    }

    toJson() {
        return {
            "license": this.license,
            "licenseUpdate": this.licenseUpdate,
            "useBleDevice": this.useBleDevice,
        }
    }
}