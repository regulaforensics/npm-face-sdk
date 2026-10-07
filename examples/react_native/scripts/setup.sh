#!/usr/bin/env bash
set -e

# Kill Metro instance at app's port.
lsof -tiTCP:${npm_package_config_metroPort} -sTCP:LISTEN | xargs kill 2>/dev/null || true

npm install
rm -rf node_modules/expo/node_modules/expo-modules-core/android/.cxx # Temp fix for expo@58.0.0-preview.3
npx expo prebuild --no-install
(cd ios && (pod install || pod update))

# Add aaptOptions for offline match
if ! grep -q faceSdkResource android/app/build.gradle && grep -q face-core-match package.json; then
  sed -i '' "s/androidResources/aaptOptions {\n\t\tnoCompress 'Regula\/faceSdkResource.dat'\n\t}\n\tandroidResources/" android/app/build.gradle
fi
