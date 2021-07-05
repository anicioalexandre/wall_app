module.exports = {
  verbose: true,
  preset: 'ts-jest',
  globals: {
    NODE_ENV: 'test',
    'ts-jest': {
      tsconfig: './src/tsconfig.json'
    }
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/mocks/files.ts',
    '\\.(css|less)$': '<rootDir>/jest/mocks/styles.ts',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@redux/(.*)': '<rootDir>/src/redux/$1',
    '@jest/(.*)': '<rootDir>/jest/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js']
}
