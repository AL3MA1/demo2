const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  chromewebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 19000,
  projectId: 'v9egqh',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
