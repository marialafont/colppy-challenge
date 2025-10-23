module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "@eslint/js/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^[A-Z_]",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_",
        args: "after-used",
        caughtErrors: "none",
      },
    ],
    "no-console": "warn",
    "react/jsx-uses-vars": "error",
  },
};
