module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js(x)'],
  setupFilesAfterEnv: ['./.jest/setup.ts'],
  testMatch: [
    '<rootDir>/src/**/*.test.(t|j)sx',
    '<rootDir>/src/**/*.test.(t|j)s',
  ],
}
