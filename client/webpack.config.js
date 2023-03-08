const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  plugins: [new NodePolyfillPlugin()],
};

module.exports = {
  resolve: {
    fallback: {
      util: require.resolve("util/"),
    },
  },
};
