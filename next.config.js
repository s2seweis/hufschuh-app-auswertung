module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Move the performance option outside of node
      config.performance = {
        hints: false, // or set it to true or other valid options as needed
      };
    }
    return config;
  },
};
