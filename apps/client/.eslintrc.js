module.exports = {
  extends: ["custom"],
  parserOptions: {
    ecmaVersion: 2020,
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
};