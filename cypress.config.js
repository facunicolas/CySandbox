const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads'); // Download verifier plugin

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks); // Download verifier implementation
    },
  },
});
