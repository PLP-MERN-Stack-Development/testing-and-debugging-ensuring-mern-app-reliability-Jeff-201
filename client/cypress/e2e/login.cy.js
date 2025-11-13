// E2E tests for login functionality

describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display login form', () => {
    cy.get('h2').should('contain', 'Login');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    
    cy.contains(/email is required/i).should('be.visible');
    cy.contains(/password is required/i).should('be.visible');
  });

  it('should show error for invalid email format', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').click();
    
    cy.contains(/email is invalid/i).should('be.visible');
  });

  it('should show error for short password', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('12345');
    cy.get('button[type="submit"]').click();
    
    cy.contains(/password must be at least 6 characters/i).should('be.visible');
  });

  it('should clear field error when user starts typing', () => {
    cy.get('button[type="submit"]').click();
    cy.contains(/email is required/i).should('be.visible');
    
    cy.get('input[name="email"]').type('t');
    cy.contains(/email is required/i).should('not.exist');
  });

  it('should navigate to register page', () => {
    cy.contains(/register here/i).click();
    cy.url().should('include', '/register');
  });

  // This test would require a test user in the database
  it.skip('should login with valid credentials', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Should redirect to dashboard
    cy.url().should('include', '/dashboard');
    
    // Should store token in localStorage
    cy.window().then((window) => {
      expect(window.localStorage.getItem('token')).to.exist;
      expect(window.localStorage.getItem('user')).to.exist;
    });
  });

  it('should show loading state during submission', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    
    // Button should show loading text
    cy.get('button[type="submit"]').should('contain', /logging in/i);
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
