// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-real-events" //? real events, like mouse clicks and movements

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@cypress/xpath') //? to use xpath syntax to find elements
require('cy-verify-downloads').addCustomCommand(); //? file download verifier