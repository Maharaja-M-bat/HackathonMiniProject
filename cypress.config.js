const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout:90000,
    defaultCommandTimeout:90000,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config);
      return config;
    
      // implement node event listeners here
       
    },
    // Enable video recording
    // Compress videos for smaller file size
  },
});
