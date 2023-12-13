module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:storybook/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'unused-imports', 'perfectionist'],
  rules: {
    '@typescript-eslint/no-explicit-any': [2, { ignoreRestArgs: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'warn',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'type',
          'parent',
          'sibling',
          'index',
          'object',
          'style',
        ],
        'newlines-between': 'never',
        order: 'asc',
        type: 'natural',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/display-name': 'error',
    'react/prop-types': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_$', vars: 'all' },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
