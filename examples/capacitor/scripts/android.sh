#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    ionic cap sync android
    open -a 'Android Studio' android
else
    ionic cap run android
fi

exit 0
