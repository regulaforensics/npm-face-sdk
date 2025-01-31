#!/usr/bin/env bash

if [[ $npm_config_o || $npm_config_open ]]; then
    cordova prepare ios
    open platforms/ios/FaceSDK.xcworkspace
else
    cordova run ios
fi
