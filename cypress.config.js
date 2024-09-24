const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      
      require('cypress-html-reporter/GenerateReport')(on, config)

    },
  },

  /*
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: "[name]-result",
    html: false
  }
  */

});
