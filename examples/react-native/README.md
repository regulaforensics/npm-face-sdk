# Regula Face SDK React Native demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-face-sdk.git`.

2. Run `npm run setup` within this directory.

3. Run the app: 
  * Android: use command `npm run android`.
  * IOS: use command `npm run ios`.

**Note**: this is just one way of running the app. You can also run it directly from Xcode and Android Studio, but in this case make sure that Metro Bundler is running(`npm start`).


## How to use offine match
1. Place a license that supports offline match at `android/app/src/main/assets/regula.license` and `ios/license/regula.license`.

2. Change android and iOS bundle id if required by your license with the following commands(replace `ANDROID_ID` and `IOS_ID` with actual ids):
```bash
git init
npx react-native-rename@latest "FaceSDK" --androidBundleID "ANDROID_ID" --iosBundleID "IOS_ID" --skipGitStatusCheck
```

3. Change core with the following commands:
```bash
npm uninstall @regulaforensics/react-native-face-core-basic
npm install @regulaforensics/react-native-face-core-match
npm run setup
```

4. Turn off the internet and run the app.
