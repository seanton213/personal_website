const babelParser = require('@babel/eslint-parser');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const react = require('eslint-plugin-react');

module.exports = [
  {
    ignores: [
      '.cache/**',
      'public/**',
      'node_modules/**',
      'gatsby-browser.js',
      'gatsby-config.js',
      'gatsby-node.js',
      'gatsby-ssr.js',
    ],
  },
  {
    files: ['src/**/*.js', 'src/**/*.jsx'],
    plugins: { react },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      camelcase: 'error',
      'consistent-return': 'warn',
      curly: 'error',
      'default-case': 'warn',
      'default-param-last': 'error',
      'dot-notation': 'warn',
      eqeqeq: 'warn',
      indent: 'off',
      'no-else-return': 'warn',
      'no-empty': 'error',
      'no-extra-parens': 'warn',
      'no-func-assign': 'error',
      'no-unused-vars': 'error',
    },
  },
  prettierRecommended,
];
