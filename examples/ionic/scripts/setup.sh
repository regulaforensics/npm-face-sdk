#!/usr/bin/env bash
set -e

npm install
ionic cordova prepare || {
    pod repo update
    ionic cordova prepare
}
