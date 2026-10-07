#!/usr/bin/env bash
set -e

vite build
npx cap sync ios
[[ " $* " == *" --open "* || " $* " == *" -o "* ]] &&
    npx cap open ios ||
    npx cap run ios --no-sync
