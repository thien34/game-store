import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettier from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    ignores: ['node_modules', '.next', 'build'],
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      // TypeScript rules
      'prettier/prettier': ['warn', { bracketSameLine: false }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // React rules
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // Next.js rules
      '@next/next/no-img-element': 'warn',

      // General rules
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  }
]

export default eslintConfig
