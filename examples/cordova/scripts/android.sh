#!/usr/bin/env bash

if [[ $npm_config_o || $npm_config_open ]]; then
    cordova prepare android
    studio platforms/android || open -a 'Android Studio' platforms/android
else
    cordova run android
fi
