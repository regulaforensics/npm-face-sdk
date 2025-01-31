#!/usr/bin/env bash
set -e

npm install
cd ios
bundle install
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install ||
    RCT_NEW_ARCH_ENABLED=1 bundle exec pod update
