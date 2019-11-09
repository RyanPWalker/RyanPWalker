module.exports = {
  parser: 'babel-eslint',
  env: {
      'es6': true,
      'browser': true,
      'node': true,
      'mocha': true,
      'jest': true
  },
  parserOptions: {
    ecmaVersion: 10,
  },
  'globals': {
      'google': true,
      'React': true
  },
  rules: {
  },
};
