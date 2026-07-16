#!/usr/bin/env bash
set -e

if [[ " $* " == *" --open "* ]] || [[ " $* " == *" -o "* ]]; then
    ionic cap run ios --open
else
    ionic cap run ios
fi

exit 0
