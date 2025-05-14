#!/usr/bin/env bash
set -e

npm install
expo prebuild

# add aaptOptions for offline match
if ! grep -q faceSdkResource android/app/build.gradle && grep -q face-core-match package.json; then
  sed -i '' "s/androidResources/aaptOptions {\n\t\tnoCompress 'Regula\/faceSdkResource.dat'\n\t}\n\tandroidResources/" android/app/build.gradle
fi
