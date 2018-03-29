module.exports = {
  extends: ['sharlaan/lib/defaults', 'plugin:vue/recommended', 'standard-jsx'],
  plugins: ['vue'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true,
      jsx: true,
    },
  },
}
