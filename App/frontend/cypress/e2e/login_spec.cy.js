describe('Login Test', () => {
    it('should display an error with wrong credentials', () => {
      cy.visit('http://localhost:3000/login.html');
      
      cy.get('#username').type('incorrectUser');
      cy.get('#password').type('wrongPassword');
      cy.get('button').click();
  
      cy.get('#loginMessage').should('contain', 'Usuario o contraseña incorrectos');
    });
  
    it('should successfully log in with correct credentials', () => {
      cy.visit('http://localhost:3000/login.html');
      
      cy.get('#username').type('usuario');
      cy.get('#password').type('1234');
      cy.get('button').click();
  
      cy.url().should('include', 'payment.html');
    });
  });
  