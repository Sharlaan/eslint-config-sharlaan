module.exports = {
  extends: ['sharlaan/lib/defaults', 'plugin:vue/recommended', 'standard-jsx'],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
