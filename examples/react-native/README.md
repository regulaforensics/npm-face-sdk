# Regula Face SDK React Native demo application

## How to build demo application
1. Download or the clone current repository using the command `git clone https://github.com/regulaforensics/npm-face-sdk.git`.

2. Execute `npm run setup` within this directory.

3. Run the app: 
  * IOS: `npm run ios`.
  * Android: `npm run android`.

**Note**: this is just one way of running the app. You can also pass `-o` or `--open` argument to the command, and this will open Xcode/Android Studio, then run the app directly from the IDE. Overall, this is a more consistent way, so if you're having troubles running the app from terminal, try running it from the IDE. Just don't forget to make sure that Metro Bundler is running(`npm start`).


## How to use offine match
1. Place a license that supports offline match at `android/app/src/main/assets/regula.license` and `ios/license/regula.license`.

2. Change android and iOS bundle id if required by your license with the following commands(replace `ANDROID_ID` and `IOS_ID` with actual ids):
```bash
git init
npx react-native-rename@latest "FaceSDK" --androidBundleID "ANDROID_ID" --iosBundleID "IOS_ID" --skipGitStatusCheck
```

3. Change core with the following commands:
```bash
npm uninstall @regulaforensics/face-core-basic
npm install @regulaforensics/face-core-match
npm run setup
```

4. Turn off the internet and run the app.
