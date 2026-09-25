#!/usr/bin/env bash
set -e

adb reverse tcp:8082 tcp:8082 >/dev/null || :
if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open -a 'Android Studio' android
    # Check Metro for this product on port 8082.
    if [[ "$(curl --silent --max-time 2 http://localhost:8082/status)" != "packager-status:running" ]]; then
        npm start
    fi
else
    expo run:android --device --port 8082
fi
