#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    ionic cordova prepare ios
    open platforms/ios/App.xcworkspace
else
    ionic cordova run ios
fi

exit 0
