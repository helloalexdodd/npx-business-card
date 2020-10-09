module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
    'no-console': 0,
  },
};
