const rootTestModule = '<rootDir>';

module.exports = {
  preset: 'jest-preact-preset',
  resetModules: true,
  setupFiles: [
    `${rootTestModule}/enzyme-setup`,
  ],
  testMatch: ['**/?(*.)(spec).js?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/__snapshots__/', 'coverage', 'template', 'samples'],
  transformIgnorePatterns: ['/node_modules/(?!(@omni-frontend|@lotto|@lottoland)/).*/'],
  moduleDirectories: [
    "node_modules"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  globals: {
    'babel-jest': {
      babelrcFile: 'babel.config.js',
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: [
    'story.(js|jsx)',
    '__snapshots__',
    'tools/test/',
  ],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}', 'packages/**/**/src/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    './packages/**/*.js': {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
    './packages/**/*.jsx': {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
}
