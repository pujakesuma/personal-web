module.exports = {
  root: false,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
  plugins: [],
  globals: {
    $nuxt: true,
  },
  // add your custom rules here
  rules: {
    'no-console': 0,
  },
};
