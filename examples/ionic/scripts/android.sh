#!/usr/bin/env bash

if [[ $npm_config_o || $npm_config_open ]]; then
    ionic cordova build android
    studio platforms/android || open -a 'Android Studio' platforms/android
else
    ionic cordova run android
fi
