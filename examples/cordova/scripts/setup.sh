#!/usr/bin/env bash
set -e

npm install
rm -rf platforms plugins
cordova prepare || {
    pod repo update
    cordova prepare
}
