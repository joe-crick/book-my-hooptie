module.exports = {
  collectCoverageFrom: ["./src/**/*.{js}", "!**/node_modules/**"],
  coverageDirectory: "./coverage",
  transform: { ".*": "<rootDir>/node_modules/jest-css-modules" },
  setupTestFrameworkScriptFile: "<rootDir>/tests/test-setup.js",
  roots: ["<rootDir>/src", "<rootDir>/tests", "<rootDir>/src/components"],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/fileMock.js",
    "\\.(css)$": "<rootDir>/tests/styleMock.js"
  }
};
