module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
    plugins: [
      "nativewind/babel",
      [
        require.resolve('babel-preset-expo/plugins/transform-import-meta'),
        { unstable_allowImportMeta: true }
      ]
    ]
  };
};
