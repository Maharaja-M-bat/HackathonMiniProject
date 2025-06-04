const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
  // "reporterOptions": {
  //   "reportDir": "cypress/Reports",
  //   "charts": true,
  //   "overwrite": true,
  //   "html": true,
  //   "json": true,
  //   "reportPageTitle": "Legrande Cypress",
  //   "reportFilename": "Legrande Cypress Test Report",
  //   "embeddedScreenshots": true,
  //   "inlineAssets": true
  // },
  "defaultCommandTimeout": 30000,
  "retries": {
    "runMode": 1,
    "openMode": 1
  },
 
  "video": true,
  "scrollBehavior": "nearest",
  "chromeWebSecurity": false,
  e2e: {
    pageLoadTimeout:90000,
    defaultCommandTimeout:90000,
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      //require('cypress-grep/src/plugin')(config);
      //return config;
    
      // implement node event listeners here
       
    },
    // Enable video recording
    // Compress videos for smaller file size
  },
});
