module.exports = {
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/test/cypress/'],
}
