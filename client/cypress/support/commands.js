// ***********************************************
// This file contains custom Cypress commands
// ***********************************************

// Login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Register command
Cypress.Commands.add('register', (username, email, password) => {
  cy.visit('/register');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Mock login with token
Cypress.Commands.add('loginByToken', (token, user) => {
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('user', JSON.stringify(user));
});

// Check if user is redirected
Cypress.Commands.add('shouldBeOnPage', (path) => {
  cy.url().should('include', path);
});

// API request helper
Cypress.Commands.add('apiRequest', (method, url, body = {}) => {
  const token = window.localStorage.getItem('token');
  
  return cy.request({
    method,
    url: `http://localhost:5000/api${url}`,
    body,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,
  });
});
