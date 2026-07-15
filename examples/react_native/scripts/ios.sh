#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    open ios/Face.xcworkspace
    # check if metro is already running
    [[ -z $(pgrep -f 'expo start') ]] && npm start
else
    npx expo run:ios  --device
fi

exit 0
