module.exports = {
  extends: [
    'sharlaan/lib/defaults',
    'plugin:react/recommended',
    'standard-jsx',
  ],
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/jsx-indent': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/forbid-prop-types': [
      'warn',
      {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],
  },
};
