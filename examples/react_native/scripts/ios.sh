#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open ios/Face.xcworkspace
    # Check if Metro is running at app's port.
    if [[ "$(curl --silent --max-time 2 http://localhost:${npm_package_config_metroPort}/status)" != "packager-status:running" ]]; then
        npm start
    else
        echo "Metro is already running on port ${npm_package_config_metroPort}."
    fi
else
    npx expo run:ios --device --port ${npm_package_config_metroPort}
fi
