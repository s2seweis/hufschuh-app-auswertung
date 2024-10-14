const { performance } = require('perf_hooks');

if (typeof globalThis.performance === 'undefined') {
  globalThis.performance = performance;
}

module.exports = {
  // your existing Next.js config
};
