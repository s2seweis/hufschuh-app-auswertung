module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        ...config.node,
        performance: true,
      };
    }
    return config;
  },
};
