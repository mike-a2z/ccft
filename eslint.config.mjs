import eslint from '@eslint/js';
import { config, configs } from 'typescript-eslint';

// https://typescript-eslint.io/getting-started
export default config(eslint.configs.recommended, ...configs.recommended);
