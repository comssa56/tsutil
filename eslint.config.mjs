import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"),
    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "module",

            parserOptions: {
                project: "./tsconfig.json",
            },
        },

        rules: {
            "array-callback-return": "error",
            "constructor-super": "error",
            "getter-return": "error",
            "no-cond-assign": "error",
            "no-const-assign":"error",
            "no-constant-binary-expression": "error",
            "no-constant-condition": "error",
            "no-constructor-return": "error",
            "no-control-regex": "error",
            "no-debugger": "error",
            "no-dupe-args": "error",
            "no-dupe-class-members": "error",
            "no-dupe-else-if": "error",
            "no-dupe-keys": "error",
            "no-duplicate-case": "error",
            "no-duplicate-imports": "error",
            "no-empty-pattern": "error",
            "no-ex-assign": "error",
            "no-fallthrough": "error",
            "no-func-assign": "error",
            "no-import-assign": "error",
            "no-inner-declarations": "error",
            "no-invalid-regexp": "error",
            "no-loss-of-precision": "error",
            "no-misleading-character-class": "error",
            "no-misleading-character-class": "error",
            "no-obj-calls": "error",
            "no-promise-executor-return": "error",
            "no-prototype-builtins": "error",
            "no-self-assign": "error",
            "no-self-compare": "error",
            "no-setter-return": "error",
            "no-sparse-arrays": "error",
            "no-template-curly-in-string": "warn",
            "no-this-before-super": "error",
            "no-this-before-super": "error",
            "no-undef": "error",
            "no-unexpected-multiline": "error",
            "no-unmodified-loop-condition": "error",
            "no-unreachable": "error",
            "no-unreachable-loop": "error",
            "no-unsafe-finally": "error",
            "no-unsafe-negation": "error",
            "no-unsafe-optional-chaining": "error",
            "no-unused-private-class-members": "error",
            "no-unused-vars": "error",
            "no-use-before-define": "error",
            "no-useless-assignment": "error",
            "no-useless-backreference": "error",
            "require-atomic-updates": "error",
            "use-isnan": "error",
            "valid-typeof": ["error", { "requireStringLiterals": true }],

        },
    },
];