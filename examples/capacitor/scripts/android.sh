#!/usr/bin/env bash
set -e

if [[ $npm_config_o || $npm_config_open ]]; then
    ionic cap sync android
    studio android || open -a 'Android Studio' android
else
    ionic cap run android
fi
