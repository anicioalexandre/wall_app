module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['prettier', '@typescript-eslint']
    }
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 'off'
  },
  settings: {
    react: { version: '^17.0.1' }
  }
}
