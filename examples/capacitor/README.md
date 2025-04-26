# Regula Face SDK Capacitor demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-face-sdk.git`.

2. Execute `npm run setup` within this directory.

3. Run the app: 
  * IOS: `npm run ios`.
  * Android: `npm run android`.

**Note**: this is just one way of running the app. You can also pass `-o` or `--open` argument to the command, and this will open Xcode/Android Studio, then run the app directly from the IDE. Overall, this is a more consistent way, so if you're having troubles running the app from terminal, try running it from the IDE.


## How to use offine match
1. Place a license that supports offline match at `public/assets/regula.license`.

2. Change android and iOS bundle id if required by your license(replace `ANDROID_ID` and `IOS_ID` with actual ids):
  * Change `applicationId` to `ANDROID_ID` in `android/app/build.gradle`.
  * Change `Bundle Identifier` to `IOS_ID` in `ios/App/App.xcodeproj` in the `Signing & Capabilities` section.

3. Change core with the following commands:
```bash
npm uninstall @regulaforensics/face-core-basic
npm install @regulaforensics/face-core-match
npm run setup
```

4. Turn off the internet and run the app.
