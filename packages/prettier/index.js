module.exports = {
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        endOfLine: 'lf',
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
