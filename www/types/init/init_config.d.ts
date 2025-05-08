/**
 * A configuration file for FaceSDK initialization.
 * Allows to initialize using license binary.
 * Also controls initialization time properties such as licenseUpdate.
 */
export class InitConfig {
    /// Constructor for initialization using a ble device.
    /// Doesn't need a license file, it will be fetched automatically from your ble device.
    ///
    /// Requires [DocumentReader](https://www.npmjs.com/package/@regulaforensics/document-reader) to be initialized with ble device.
    static withBleDevice(): InitConfig

    /**
     * @param license - The license binary file.
     * @param params.licenseUpdate - Enables automatic license update check during {@link FaceSDK} initialization.
     */
    constructor(
        license: string,
        params?: {
            licenseUpdate?: boolean
        })
}
