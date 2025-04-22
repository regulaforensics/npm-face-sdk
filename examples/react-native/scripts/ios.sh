#!/usr/bin/env bash
set -e

if [[ $npm_config_o || $npm_config_open ]]; then
    open ios/FaceSDK.xcworkspace
else
    react-native run-ios
fi
