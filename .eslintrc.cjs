module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './tsconfig.config.files.json',
      './tsconfig.eslint.json',
    ],
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        project: '**/tsconfig.json',
      },
    },
    react: { version: 'detect' },
  },
  rules: {
    'no-console': 'off',

    '@typescript-eslint/no-shadow': 'error',
    'no-shadow': 'off',

    '@typescript-eslint/no-use-before-define': 'error',
    'no-use-before-define': 'off',

    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-constructor': 'off',

    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],

    'dot-notation': 'off',

    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.ts', // jest config
          '**/vite.config.ts',
          '**/webpack.config.js',
          '**/vite-env.d.ts',
        ],
        optionalDependencies: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
        depth: 3,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-void': ['error', { allowAsStatement: true }],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
