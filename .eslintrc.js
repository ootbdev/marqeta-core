module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'SharedTests': 'readonly',
    'Factories': 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  }
}
