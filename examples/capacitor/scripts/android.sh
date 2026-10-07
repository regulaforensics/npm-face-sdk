#!/usr/bin/env bash
set -e

vite build
npx cap sync android
[[ " $* " == *" --open "* || " $* " == *" -o "* ]] &&
    npx cap open android ||
    npx cap run android --no-sync
