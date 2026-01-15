import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': ['error', {
        semi: true,
        tabWidth: 2,
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      }],
      quotes: ['error', 'single'],
      semi: [
        'error',
        'never',
        {
          beforeStatementContinuationChars: 'never',
        },
      ],
      'react/no-unused-prop-types': 'off',
      'no-unused-vars': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/display-name': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  }
)