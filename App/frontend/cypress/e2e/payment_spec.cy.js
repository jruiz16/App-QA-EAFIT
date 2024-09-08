describe('Payment Test', () => {
    it('should display an error for invalid payment amount', () => {
      cy.visit('http://localhost:3000/payment.html');
      
      cy.get('#amount').type('-10');
      cy.get('#description').type('Pago inválido');
      cy.get('button').click();
  
      cy.get('#paymentMessage').should('contain', 'Monto inválido');
    });
  
    it('should process payment with valid data', () => {
      cy.visit('http://localhost:3000/payment.html');
      
      cy.get('#amount').type('100');
      cy.get('#description').type('Pago válido');
      cy.get('button').click();
  
      cy.get('#paymentMessage').should('contain', 'Pago de $100 procesado correctamente');
    });
  });
  