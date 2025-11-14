#!/usr/bin/env bash

if [[ $npm_config_o || $npm_config_open ]]; then
    open ios/Face.xcworkspace
    # check if metro is already running
    if ! pgrep -f "expo start" > /dev/null; then
        watchman shutdown-server # fix potential errors
        npm start
    fi
else
    npx expo run:ios  --device
fi
