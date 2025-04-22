#!/usr/bin/env bash
set -e

if [[ $npm_config_o || $npm_config_open ]]; then
    studio android || open -a 'Android Studio' android
else
    react-native run-android
fi
