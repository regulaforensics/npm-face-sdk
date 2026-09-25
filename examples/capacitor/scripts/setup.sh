#!/usr/bin/env bash
set -e

npm install
vite build
npx cap sync
