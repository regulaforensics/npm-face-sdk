#!/usr/bin/env bash
set -e

npm install
ionic cap sync ios || {
    cd ios/App
    pod update
}
