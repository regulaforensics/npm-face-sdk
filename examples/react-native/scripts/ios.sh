#!/usr/bin/env bash
set -e

if [[ $npm_config_o || $npm_config_open ]]; then
    open ios/FaceSDK.xcworkspace
    # check if metro is already running
    if ! pgrep -f "react-native start"; then
        npm start
    fi
else
    react-native run-ios
fi
