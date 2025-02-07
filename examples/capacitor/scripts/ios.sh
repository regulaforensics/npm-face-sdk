#!/usr/bin/env bash
set -e

if [[ $npm_config_o || $npm_config_open ]]; then
    ionic cap run ios --open
else
    ionic cap run ios
fi
