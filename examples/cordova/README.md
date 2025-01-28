# Regula Face SDK Cordova demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-face-sdk.git`.

2. Run `npm run setup` within this directory.

3. Run the app: 
  * Android: use command `npm run android`.
  * IOS: use command `npm run ios`.

**Note**: this is just one way of running the app. You can also run it directly from Xcode and Android Studio, but in this case make sure to run `cordova prepare ios` and `cordova prepare android` before building if any changes were make to the project.


## How to use offine match
1. Place a license that supports offline match at `www/regula.license`.

2. Change `android-packageName` and `ios-CFBundleIdentifier` in `config.xml` if required by your license.

3. Change core with the following commands:
```bash
cordova plugin remove @regulaforensics/face-core-basic
cordova plugin add @regulaforensics/face-core-match
cordova prepare
```

4. Turn off the internet and run the app.
