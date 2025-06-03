const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       
    },
    video: true, // Enable video recording
    // Compress videos for smaller file size
  },
});
