#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open -a 'Android Studio' android
else
    npx expo run:android --device --no-bundler "$@"
fi
