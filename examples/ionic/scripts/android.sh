#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    ionic cordova prepare android
    open -a 'Android Studio' platforms/android
else
    ionic cordova run android
fi

exit 0
