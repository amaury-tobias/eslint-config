module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@attq/eslint-config-ts',
  ],
  plugins: [
    'vue',
  ],
}
