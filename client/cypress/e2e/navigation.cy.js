// E2E tests for navigation and routing

describe('Navigation', () => {
  it('should navigate to home page', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'MERN Testing & Debugging Application');
  });

  it('should navigate from home to login', () => {
    cy.visit('/');
    cy.contains('Get Started').click();
    cy.url().should('include', '/login');
  });

  it('should navigate from home to register', () => {
    cy.visit('/');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/register');
  });

  it('should display 404 page for invalid routes', () => {
    cy.visit('/invalid-route');
    cy.contains('404').should('be.visible');
    cy.contains('Page not found').should('be.visible');
  });

  it('should navigate back to home from 404 page', () => {
    cy.visit('/404');
    cy.contains('Go Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should display all feature cards on home page', () => {
    cy.visit('/');
    
    cy.contains('Complete Test Coverage').should('be.visible');
    cy.contains('Advanced Debugging').should('be.visible');
    cy.contains('Secure Authentication').should('be.visible');
    cy.contains('Responsive Design').should('be.visible');
  });

  it('should handle browser back button', () => {
    cy.visit('/');
    cy.contains('Get Started').click();
    cy.url().should('include', '/login');
    
    cy.go('back');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should handle browser forward button', () => {
    cy.visit('/');
    cy.contains('Get Started').click();
    cy.url().should('include', '/login');
    
    cy.go('back');
    cy.go('forward');
    cy.url().should('include', '/login');
  });
});
