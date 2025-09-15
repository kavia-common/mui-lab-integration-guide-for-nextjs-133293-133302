#!/bin/bash
cd /home/kavia/workspace/code-generation/mui-lab-integration-guide-for-nextjs-133293-133302/nextjs_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

