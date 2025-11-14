#!/usr/bin/env bash

adb reverse tcp:8081 tcp:8081 >/dev/null || :
if [[ $npm_config_o || $npm_config_open ]]; then
    studio android || open -a 'Android Studio' android
    # check if metro is already running
    if ! pgrep -f "expo start" >/dev/null; then
        watchman shutdown-server # fix potential errors
        npm start
    fi
else
    expo run:android --device
fi
