#!/usr/bin/env bash
set -e

npm install
cd ios/App
pod install || pod update
