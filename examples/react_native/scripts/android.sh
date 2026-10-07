#!/usr/bin/env bash
set -e

adb reverse tcp:${npm_package_config_metroPort} tcp:${npm_package_config_metroPort} >/dev/null || :
if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open -a 'Android Studio' android
    # Check if Metro is running at app's port.
    if [[ "$(curl --silent --max-time 2 http://localhost:${npm_package_config_metroPort}/status)" != "packager-status:running" ]]; then
        npm start
    else
        echo "Metro is already running on port ${npm_package_config_metroPort}."
    fi
else
    expo run:android --device --port ${npm_package_config_metroPort}
fi
