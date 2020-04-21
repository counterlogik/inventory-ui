module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': 'error',
    'import/no-deprecated': 'warn',
    'import/order': 'warn',
    'max-len': 'off',
    'no-debugger': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'prettier/prettier': 'error',
    'quote-props': ['error', 'as-needed'],
    semi: 'error',
  },
};
