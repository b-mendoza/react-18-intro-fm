// @ts-check

/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: [
    './node_modules/prettier-plugin-jsdoc/dist/index.js',
    'prettier-plugin-organize-imports',
  ],
  singleQuote: true,
  trailingComma: 'all',
};

export default prettierConfig;
