#!/usr/bin/env bash
set -e

if [[ $npm_config_o || $npm_config_open ]]; then
    studio android || open -a 'Android Studio' android
    # check if metro is already running
    if ! pgrep -f "react-native start" > /dev/null; then
        npm start
    fi
else
    react-native run-android
fi
