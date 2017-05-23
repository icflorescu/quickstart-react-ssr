module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: { node: true, browser: true },
  rules: {
    'no-unexpected-multiline': 'error',
    'comma-dangle': ['warn', 'never'],
    eqeqeq: 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
