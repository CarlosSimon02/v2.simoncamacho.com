import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.js base configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  
  // Additional configurations from the first ESLint config
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended-legacy',
    'prettier'
  ),
  
  // Manual configuration for plugins, rules, and settings
  {
    plugins: {
      '@typescript-eslint': compat.plugins['@typescript-eslint'],
      'react-hooks': compat.plugins['react-hooks'],
      'prettier': eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'off',
      'no-extra-boolean-cast': 'off',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  },
];