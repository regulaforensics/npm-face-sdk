# Regula Face SDK Capacitor demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-face-sdk.git`.

2. Run `npm run setup` within this directory.

3. Run the app: 
  * Android: use command `ionic cap run android`.
  * IOS: use command `ionic cap run ios`.

**Note**: this is just one way of running the app. You can also run it directly from Xcode and Android Studio, but in this case make sure to run `ionic cap sync` before building if any changes were make to the project.


## How to use offine match
1. Place a license that supports offline match at `public/assets/regula.license`.

2. Change android and iOS bundle id if required by your license(replace `ANDROID_ID` and `IOS_ID` with actual ids):
  * Change `applicationId` to `ANDROID_ID` in `android/app/build.gradle`.
  * Change `Bundle Identifier` to `IOS_ID` in `ios/App/App.xcodeproj` in the `Signing & Capabilities` section.

3. Change core with the following commands:
```bash
npm uninstall @regulaforensics/face-core-basic
npm install @regulaforensics/face-core-match
ionic cap sync
```

4. Turn off the internet and run the app.
