#!/usr/bin/env bash

if [[ $npm_config_o || $npm_config_open ]]; then
    ionic cordova prepare ios
    open platforms/ios/FaceSDK.xcworkspace
else
    ionic cordova run ios
fi
