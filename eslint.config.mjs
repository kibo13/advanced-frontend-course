import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import i18next from 'eslint-plugin-i18next'

/** @type {import('eslint').Linter.Config[]} */
export default [
	// Настройка файлов, которые должны проверяться
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

	// Установка глобальных переменных для браузера
	{ languageOptions: { globals: globals.browser } },

	// Рекомендуемая конфигурация для JavaScript
	pluginJs.configs.recommended,

	// Рекомендуемая конфигурация для TypeScript
	...tseslint.configs.recommended,

	// Рекомендуемая конфигурация для React
	{
		...pluginReact.configs.flat.recommended,
		settings: {
			react: {
				version: '17.0', // Указываем версию React
			},
		},
		rules: {
			'react/no-deprecated': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' }, // Игнорировать переменные, начинающиеся с "_"
			],
		},
	},

	// Настройка для плагина i18next
	{
		plugins: {
			i18next: i18next, // Подключаем плагин i18next
		},
		rules: {
			'i18next/no-literal-string': [
				'error',
				{
					markupOnly: true,
					ignoreAttribute: ['data-testid'],
				},
			],
		},
	},
]
