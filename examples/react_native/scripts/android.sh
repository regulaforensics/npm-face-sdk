#!/usr/bin/env bash
set -e

adb reverse tcp:8081 tcp:8081 >/dev/null || :
if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open -a 'Android Studio' android
    # check if metro is already running
    [[ -z $(pgrep -f 'expo start') ]] && npm start
else
    expo run:android --device
fi

exit 0
