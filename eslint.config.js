const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const globals = require('globals');
const { fixupPluginRules } = require('@eslint/compat');

const fixedReact = fixupPluginRules(reactPlugin);
const fixedReactHooks = fixupPluginRules(reactHooksPlugin);
const fixedJsxA11y = fixupPluginRules(jsxA11yPlugin);

module.exports = [
  {
    ignores: [
      '**/dist/',
      '**/build/',
      '**/storybook-static/',
      '**/node_modules/',
      '**/.storybook/',
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
    ],
  },

  ...tsPlugin.configs['flat/recommended'],

  {
    ...reactPlugin.configs.flat.recommended,
    plugins: { react: fixedReact },
  },

  {
    ...reactHooksPlugin.configs.flat.recommended,
    plugins: { 'react-hooks': fixedReactHooks },
  },

  {
    plugins: { 'jsx-a11y': fixedJsxA11y },
    rules: { ...jsxA11yPlugin.configs.recommended.rules },
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': fixedReact,
      'react-hooks': fixedReactHooks,
      'jsx-a11y': fixedJsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'react/no-array-index-key': 'warn',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },

  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'off',
    },
  },

  {
    files: ['**/*.stories.tsx', '**/*.stories.ts'],
    rules: {
      'no-console': 'off',
    },
  },
];
