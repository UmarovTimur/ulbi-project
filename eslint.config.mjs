import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // базовые рекомендации
    js.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
],
{
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { react: pluginReact },
    extends: [],
    languageOptions: {
        globals: globals.browser,
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "@typescript-eslint/no-unused-expressions": "warn",
        'no-unused-expressions': 'off',
        "react/no-deprecated": "warn",
        "max-len": ["warn", { "ignoreComments": true, "code": 100 }],
        "@typescript-eslint/no-unused-vars": "warn"
    },
},

);
