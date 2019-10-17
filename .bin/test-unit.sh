#!/bin/bash
if [[ $(basename $PWD) == "betslip-mono" ]]; then
    export NODE_ICU_DATA="$PWD/node_modules/full-icu"
else
    export NODE_ICU_DATA="$PWD/../../../node_modules/full-icu" # dangerous here, hardcoded path
fi

jest --config="./node_modules/@betslip/test/jest.config.js" --rootDir="./" $@
