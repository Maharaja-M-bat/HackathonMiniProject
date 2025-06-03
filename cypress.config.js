const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout:90000,
    defaultCommandTimeout:90000,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
       
    },
    video: true, // Enable video recording
    // Compress videos for smaller file size
  },
});
