module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    $config: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "p-ts",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "no-null", "prettier"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    camelcase: "off", // typescript-eslint/naming-convention で✓
    "import/extensions": "off",
    "class-methods-use-this": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off", // NOTE: anyはTSCでチェック
  },
  overrides: [
    {
      files: [
        "nuxt.config.ts",
        "plugins/*.ts",
        "middleware/*.ts",
        "server/*.ts",
        "**/*.d.ts",
      ],
      rules: {
        "import/no-default-export": "off",
      },
    },
    {
      files: ["utils/storeAccessor.ts"],
      rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "import/no-default-export": "off",
        "no-shadow": "off",
        "no-param-reassign": "off",
      },
    },
    {
      files: ["store/*.ts"],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: "method", format: ["camelCase", "UPPER_CASE"] },
        ],
      },
    },
    {
      files: ["*.vue"],
      rules: {
        "import/no-default-export": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          { selector: "property", format: ["camelCase", "PascalCase"] },
        ],
      },
    },
    {
      files: "dangerfile.js",
      globals: { danger: true, warn: true, markdown: true },
    },
  ],
};
