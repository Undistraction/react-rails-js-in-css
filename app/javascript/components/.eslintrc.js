module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['prettier', 'react'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'func-names': ['error', 'never'],
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-confusing-arrow': 'off',
    quotes: [
      'error',
      'backtick',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'valid-jsdoc': ['error'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'import/extensions': ['off', 'never'],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-unused-vars': ['error', { args: 'after-used' }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        // By default it will error if a <Link /> comp doesn't have an 'href' attribute, but Gatsby uses a 'to' attribute.
        components: [],
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}
