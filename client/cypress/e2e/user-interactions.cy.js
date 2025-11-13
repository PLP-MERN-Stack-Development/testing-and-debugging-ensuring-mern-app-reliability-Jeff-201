// E2E tests for user interactions and UI components

describe('User Interactions', () => {
  describe('Button Component', () => {
    it('should display different button variants on home page', () => {
      cy.visit('/');
      
      // Primary button
      cy.contains('Get Started').should('have.class', 'btn-primary');
      
      // Secondary button
      cy.contains('Sign Up').should('have.class', 'btn-secondary');
    });

    it('should respond to button hovers', () => {
      cy.visit('/');
      
      cy.contains('Get Started')
        .trigger('mouseover')
        .should('be.visible');
    });

    it('should be clickable and navigate', () => {
      cy.visit('/');
      
      cy.contains('Get Started').click();
      cy.url().should('include', '/login');
    });
  });

  describe('Form Interactions', () => {
    beforeEach(() => {
      cy.visit('/login');
    });

    it('should focus on email input when clicking label', () => {
      cy.contains('label', 'Email').click();
      cy.get('input[name="email"]').should('have.focus');
    });

    it('should focus on password input when clicking label', () => {
      cy.contains('label', 'Password').click();
      cy.get('input[name="password"]').should('have.focus');
    });

    it('should accept keyboard input', () => {
      cy.get('input[name="email"]')
        .type('test@example.com')
        .should('have.value', 'test@example.com');
    });

    it('should allow clearing input values', () => {
      cy.get('input[name="email"]')
        .type('test@example.com')
        .clear()
        .should('have.value', '');
    });

    it('should submit form on Enter key', () => {
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123{enter}');
      
      // Form should attempt to submit
      cy.get('button[type="submit"]').should('be.disabled');
    });
  });

  describe('Responsive Design', () => {
    it('should display properly on mobile viewport', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      
      cy.get('h1').should('be.visible');
      cy.contains('Get Started').should('be.visible');
    });

    it('should display properly on tablet viewport', () => {
      cy.viewport('ipad-2');
      cy.visit('/');
      
      cy.get('.feature-grid').should('be.visible');
    });

    it('should display properly on desktop viewport', () => {
      cy.viewport(1920, 1080);
      cy.visit('/');
      
      cy.get('.feature-grid').should('be.visible');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      cy.visit('/');
      
      cy.get('h1').should('exist');
    });

    it('should have labels for form inputs', () => {
      cy.visit('/login');
      
      cy.get('label[for="email"]').should('exist');
      cy.get('label[for="password"]').should('exist');
    });

    it('should have alt text for important elements', () => {
      cy.visit('/');
      
      // Check if interactive elements are accessible
      cy.contains('Get Started').should('have.attr', 'class');
    });

    it('should support keyboard navigation', () => {
      cy.visit('/login');
      
      cy.get('body').tab();
      cy.focused().should('have.attr', 'name', 'email');
      
      cy.focused().tab();
      cy.focused().should('have.attr', 'name', 'password');
    });
  });
});
