#!/usr/bin/env bash
set -e

[[ " $* " == *" --open "* || " $* " == *" -o "* ]] &&
    open ios/Face.xcworkspace ||
    npx expo run:ios --device --no-bundler "$@"
