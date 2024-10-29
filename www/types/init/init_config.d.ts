/**
 * A configuration file for FaceSDK initialization.
 * Allows to initialize using license binary.
 * Also controls initialization time properties such as licenseUpdate.
 */
export class InitConfig {
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