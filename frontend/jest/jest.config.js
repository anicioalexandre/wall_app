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
      '<rootDir>/mocks/files.ts',
    '\\.(css|less)$': '<rootDir>/mocks/styles.ts'
  },
  moduleFileExtensions: ['ts', 'tsx']
}
