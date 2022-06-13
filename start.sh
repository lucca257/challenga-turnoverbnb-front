#!/usr/bin/env bash
echo "***** INSTALLING DEPENDENCIES *****"
COPY package*.json ./
npm install

echo "***** STARTING PROJECT IN DEVELOP MODE *****"
npm run serve
