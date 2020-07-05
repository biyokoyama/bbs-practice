module.exports = {
  moduleFileExtensions: [
    "js",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/frontend/$1"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/frontend/**/*.{js,vue}"
  ],
  coverageDirectory: "<rootDir>/coverage/frontend"
}
