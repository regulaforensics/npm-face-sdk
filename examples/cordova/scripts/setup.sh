#!/usr/bin/env bash
set -e

npm install
cordova prepare || {
    pod repo update
    cordova prepare
}
