const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    //baseUrl: 'http://localhost:3000', // ajuste conforme seu projeto
  },
  video: true,
  videosFolder: 'cypress/videos',
  videoUploadOnPasses: false, // <- ESSENCIAL pra manter vídeos mesmo se passar

});

