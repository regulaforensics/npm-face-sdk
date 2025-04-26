#!/usr/bin/env bash
set -e

npm install
rm -rf platforms plugins
ionic cordova prepare || {
    pod repo update
    ionic cordova prepare
}
