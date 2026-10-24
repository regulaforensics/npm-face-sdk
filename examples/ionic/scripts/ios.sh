#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    ionic cordova prepare ios
    open platforms/ios/App.xcworkspace
else
    ionic cordova build ios --device
    # Use the .app directly to bypass Ionic's outdated IPA path and ZIP extraction.
    native-run ios --app platforms/ios/App.xcarchive/Products/Applications/Face.app --device
fi
