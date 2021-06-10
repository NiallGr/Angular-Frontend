/// <reference types="cypress" />

describe('Dinner2Door', () => {
     
    const email = "dinner2door123@gmail.com"
    const password = "Dinner2Door"
   
    
    it('Login Success', () => {
        cy.visit('http://localhost:4200/login') 
         
        cy.get('input[name=username]').type(email);
        cy.get('input[name=password]').type(password);
        cy.get('input[type=submit]').click();

        cy.contains('Adminstration')
    });


    it(' View Success & Return Success', () => {
        // Login
        cy.get('input[name=username]').type(email);
        cy.get('input[name=password]').type(password);
        cy.get('input[type=submit]').click();
        // Does View Button Work
        cy.get('#FoodItemView').click();
        // Does Return Work 
        cy.get('#return').click();
      
    });

});