# Regula Face SDK Cordova demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-face-sdk.git`.

2. Execute `npm run setup` within this directory.

3. Run the app: 
  * IOS: `npm run ios`.
  * Android: `npm run android`.

**Note**: this is just one way of running the app. You can also pass `-o` or `--open` argument to the command, and this will open Xcode/Android Studio, then run the app directly from the IDE. Overall, this is a more consistent way, so if you're having troubles running the app from terminal, try running it from the IDE.


## How to use offine match
1. Place a license that supports offline match at `www/regula.license`.

2. Change `android-packageName` and `ios-CFBundleIdentifier` in `config.xml` if required by your license.

3. Change core with the following commands:
```bash
cordova plugin remove @regulaforensics/face-core-basic
cordova plugin add @regulaforensics/face-core-match
npm run setup
```

4. Turn off the internet and run the app.
