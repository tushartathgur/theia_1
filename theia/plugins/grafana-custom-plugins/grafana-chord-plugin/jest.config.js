// This file is needed because it is used by vscode and other tools that
// call `jest` directly.  However, unless you are doing anything special
// do not edit this file

const standard = require('@grafana/toolkit/src/config/jest.plugin.config');

// This process will use the same config that `yarn test` is using
module.exports = {
    "preset": "ts-jest",
    "moduleNameMapper": {
        "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
    },
    "testEnvironment": "jsdom",
    "setupFiles": ["./src/setupTests.js"],
    "collectCoverageFrom": ['**/*.tsx'],
}
