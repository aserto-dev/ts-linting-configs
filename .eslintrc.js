/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'prettier',
    'prettier/react',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended', // Uses the recommended rules from react hooks
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    eqeqeq: 'always',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'property',
        format: ['strictCamelCase'],
        filter: {
          regex: '[- ]',
          match: false,
        },
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    'prettier/prettier': ['error'],
    'react/jsx-one-expression-per-line': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
  ignorePatterns: ['dist/**/*.js'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
}