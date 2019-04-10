#!/bin/sh
npm run build
rm -rf ../training_backend/build
cp -r build ../training_backend/
chmod u+x deploy.sh