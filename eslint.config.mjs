import globals from 'globals';
import pluginJs from '@eslint/js';
import jest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended, {
	ignores,
} from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ ignores: ['dist/', '!node_modules/'] },
	{ files: ['src/**/*.{js,ts,jsx,tsx}', 'test/**/*.{js,ts,jsx,tsx}'] },
	{ files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
	{ languageOptions: { globals: globals.node } },
	// jest settingsk
	pluginJs.configs.recommended,
	{
		files: ['test/**/*.{js,ts,jsx,tsx}'],
		...jest.configs['flat/recommended'],
		rules: {
			...jest.configs['flat/recommended'].rules,
			'jest/prefer-expect-assertions': 'off',
		},
	},
	{
		rules: {
			'no-unused-vars': 'off',
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
		},
	},
	eslintPluginPrettierRecommended,
];
