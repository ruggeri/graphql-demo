module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "json",
    "prettier",
    "react",
    "sort-destructure-keys",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-non-null-assertion": 0,
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": ["warn"],
    "import/prefer-default-export": 0,
    "quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    "sort-destructure-keys/sort-destructure-keys": 2,
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
