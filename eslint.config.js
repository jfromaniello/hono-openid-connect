import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        // Add globals for browser and Node.js environments
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Response: 'readonly',
        crypto: 'readonly',
        client: 'readonly',
        getLoginState: 'readonly',
        DEFAULT_ROUTES: 'readonly',
        DEFAULT_AUTH_PARAMS: 'readonly',
        DEFAULT_CLOCK_TOLERANCE: 'readonly',
        DEFAULT_HTTP_TIMEOUT: 'readonly',
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettierPlugin
    },
    rules: {
      // Basic style rules
      'indent': ['error', 2],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'no-unused-vars': 'off',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Prettier integration
      'prettier/prettier': ['error', {
        'semi': true,
        'singleQuote': true,
        'tabWidth': 2,
        'printWidth': 100,
        'trailingComma': 'es5',
      }]
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      '**/*.d.ts'
    ]
  }
];
