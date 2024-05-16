const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads'); // Download verifier plugin

module.exports = defineConfig({
  e2e: {
    retries: { runMode: 2, openMode: 2}, // re-try global config
    projectId: "j6zbge", // project id from cypress dashboard
    viewportWidth: 1920, // environment width config
    viewportHeight: 1080, // environment height config
    baseUrl: "https://the-internet.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks); // Download verifier implementation
    },
  },

  env : {
    demoqa : "https://demoqa.com",
  }

});
