// ***********************************************************
// This support file is processed and loaded before test files.
// You can add global configuration and behavior here.
// ***********************************************************

import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests in command log
Cypress.on('window:before:load', (win) => {
  // Stub console methods if needed
  win.console.error = cy.stub();
  win.console.warn = cy.stub();
});

// Clean up before each test
beforeEach(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});
