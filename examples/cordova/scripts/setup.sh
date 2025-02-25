#!/usr/bin/env bash
set -e

npm install
cordova prepare || {
    pod update
    ionic cordova prepare
}
