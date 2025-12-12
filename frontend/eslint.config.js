import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import reactNativePlugin from 'eslint-plugin-react-native'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/src/tokens/**', '**/babel.config.js', '**/metro.config.js', '**/eslint.config.js'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-native': reactNativePlugin
    },
    rules: {
      // Prevent hardcoded style values (excluding token files)
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/^#[0-9a-fA-F]{3,8}$/]',
          message: 'Hardcoded color values are not allowed. Use colors from tokens/colors.ts'
        },
        {
          selector: 'Literal[value=/^rgb\\(/]',
          message: 'Hardcoded rgb() colors are not allowed. Use colors from tokens/colors.ts'
        },
        {
          selector: 'Literal[value=/^rgba\\(/]',
          message: 'Hardcoded rgba() colors are not allowed. Use colors from tokens/colors.ts'
        },
        {
          selector: 'Literal[value=/^monospace$/]',
          message: 'Hardcoded font family not allowed. Use typography.fontFamily from tokens/typography.ts'
        },
        {
          selector: 'Literal[value=/^(normal|bold|100|200|300|400|500|600|700|800|900)$/]',
          message: 'Hardcoded font weight not allowed. Use typography.fontWeight from tokens/typography.ts'
        },
        {
          selector: 'Literal[value=/^[4|6|8|10|12|14|16|20|24|30|32]$/]',
          message: 'Hardcoded numeric values may be spacing/typography/radius. Use tokens instead.'
        }
      ],
      // TypeScript strict rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // React Native specific rules
      'react-native/no-unused-styles': 'off', // Too many false positives with dynamic styles
      'react-native/split-platform-components': 'off',
      'react-native/no-inline-styles': 'warn',
      'react-native/no-color-literals': 'off', // Conflicts with our custom rules
      // General code quality
      'no-console': 'warn',
      'prefer-const': 'error'
    }
  },
  {
    files: ['babel.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-undef': 'off' // babel config uses module.exports
    }
  }
]