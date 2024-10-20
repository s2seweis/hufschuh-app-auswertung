module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Move the performance option outside of node
      config.performance = {
        hints: false, // Disabling performance hints for the client-side build
      };
    }
    return config;
  },

  // Adding redirects for handling the initial route
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pferde', // Redirect to the signin page (or whichever is your initial page)
        permanent: false, // Use false to make it a temporary redirect
      },
    ];
  },
};
