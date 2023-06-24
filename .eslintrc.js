module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint", "tailwindcss"],
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
    },
    next: {
      rootDir: true,
    },
  },
}
