/// <reference types="cypress" />

describe('Dinner2Door', () => {

    const email = "dinner2door123@gmail.com"
    const password = "Dinner2Door"

    it('Restricted paths redirect', () => {

        // visit restricted access
        cy.visit('http://localhost:4200/fooditems')
        // rediret to login URL
        cy.url().should('include', 'http://localhost:4200/login')
        // visit restricted access
        cy.visit('http://localhost:4200/create-fooditem')
        // rediret to login URL
        cy.url().should('include', 'http://localhost:4200/login')

    });

    it('Login & Logout Success', () => {

        cy.login(email, password)

        // Wait 
        cy.wait(1000)

        cy.contains('Adminstration')
        // Logout
        cy.get('#adminLogout').click();

    });


    it(' View Food Item Success & Return Success', () => {
        // Login
        cy.login(email, password)
        // Wait 
        cy.wait(1000)
        // Does View Button Work
        cy.get('#FoodItemView').click();
        // Does Return Work 
        cy.get('#return').click();

    });

    it(' Update Food Item Success & Return Success', () => {
        // Login
        cy.login(email, password)
        // Wait 
        cy.wait(1000)
        // Does the update Button Work
        cy.get('#FoodItemUpdate').click();
        cy.get('input[name=name]').clear();
        // Change Name 
        cy.get('input[name=name]').type("Avocado");
        cy.get('input[name=price]').clear();
        // Change Price 
        cy.get('input[name=price]').type("1.98");
        cy.get('#updateSubmitBtn').click();


    });

    it(' Add Food Item Success', () => {
        // Login
        cy.login(email, password)
        // Wait 
        cy.wait(1000)
        // Does "Create Food Item" Button Work
        cy.get('#CreateFoodItem').click();
        // Add Name 
        cy.get('input[name=name]').type("TESTING_FRUIT");
        // Assign Food Group
        cy.get('select').select('Vegetable');
        // add Price 
        cy.get('input[name=price]').type("100.98");
        // Add IMG 
        cy.get('input[name=image]').type("https://daily.jstor.org/wp-content/uploads/2017/05/avocado_1050x700.jpg");
        // Submit 
        cy.get('#AddItemSubmitBtn').click();

        // Checking for item name
        cy.contains('TESTING_FRUIT')

    });

    it(' Delete Food Item Success', () => {
        // Login
        cy.login(email, password)

        // Wait 
        cy.wait(1000)

        // Checking for item name
        cy.get(':nth-child(25) > :nth-child(5) > #FoodItemDelete').click();

        // Logout 
        // Logout
        cy.get('#adminLogout').click();
    });

    it(' Add Item to Cart & Open Cart', () => {


        // Checking for item name
        cy.get(':nth-child(1) > .card > .card-body > .btn').click();
        cy.get(':nth-child(3) > .card > .card-body > .btn').click();
        cy.get(':nth-child(5) > .card > .card-body > .btn').click();
        // Open checkout cart
        cy.get('.mt-2 > .total').click();

    });

    it('Increment & Remove Items', () => {


        // Increment Items 
        cy.get(':nth-child(2) > :nth-child(3) > .items > .row > :nth-child(1) > .btn').click();

        cy.get(':nth-child(3) > :nth-child(3) > .items > .row > :nth-child(1) > .btn').click();

        cy.get(':nth-child(4) > :nth-child(3) > .items > .row > :nth-child(1) > .btn').click();
        expect('#TempCartQuanity').to.not.equal('1');

        // Decrement Items
        cy.get(':nth-child(2) > :nth-child(3) > .items > .row > :nth-child(3) > .btn').click();

        cy.get(':nth-child(3) > :nth-child(3) > .items > .row > :nth-child(3) > .btn').click();

        cy.get(':nth-child(4) > :nth-child(3) > .items > .row > :nth-child(3) > .btn').click();
        expect('#TempCartQuanity').to.not.equal('2');
    });




    it('Customer Information', () => {

        cy.get('#CheckoutBtn').click();
        // First Name 
        cy.get('input[formControlName=firstName]').type("John");
        // Last Name 
        cy.get('input[formControlName=lastName]').type("Doe");
        // Email
        cy.get('input[formControlName=email]').type("johndoe@gmail.com");

    });

    it('Shipping Address', () => {

        // Country
        cy.get('[formgroupname="shippingAddress"] > :nth-child(2)').type("Canada");
        // Street
        cy.get(':nth-child(1) > .form-area.ng-invalid > :nth-child(3) > .col-md-9 > .input-space > .ng-untouched').type("Fraser Street");
        // City
        cy.get(':nth-child(1) > .form-area.ng-invalid > :nth-child(4) > .col-md-9 > .input-space > .ng-untouched').type("Vancouver");
        // State
        cy.get(':nth-child(1) > .form-area.ng-invalid > :nth-child(5) > .col-md-9 > .input-space > .ng-untouched').type("British Columbia");
        // ZipCode
        cy.get(':nth-child(1) > .form-area.ng-invalid > :nth-child(6) > .col-md-9 > .input-space > .ng-untouched').type("123-ABC");


    });

    it('Shipping & Billing Addresss Are The Same', () => {
        // Fill Billing address
        cy.get('.au-checkbox > input').click();

        // Country Should not be empty 
        cy.get('[formgroupname="billingAddress"] > :nth-child(2) > .col-md-9 > .input-space > .ng-untouched').invoke('val').should('not.be.empty')
        // Street Should not be empty 
        cy.get('[formgroupname="billingAddress"] > :nth-child(3) > .col-md-9 > .input-space > .ng-untouched').invoke('val').should('not.be.empty')
        // City Should not be empty 
        cy.get('[formgroupname="billingAddress"] > :nth-child(4) > .col-md-9 > .input-space > .ng-untouched').invoke('val').should('not.be.empty')
        // State Should not be empty 
        cy.get('[formgroupname="billingAddress"] > :nth-child(5) > .col-md-9 > .input-space > .ng-untouched').invoke('val').should('not.be.empty')
        // ZipCode Should not be empty 
        cy.get('[formgroupname="billingAddress"] > :nth-child(6) >.col-md-9 > .input-space > .ng-untouched').invoke('val').should('not.be.empty')

        // Empty Billing Address
        cy.get('.au-checkbox > input').click();

    });

    it('Billing Address', () => {
        // Fill Billing address

        // Country 
        cy.get('[formgroupname="billingAddress"] > :nth-child(2) > .col-md-9 > .input-space > .ng-untouched').type("Canada");
        // Street 
        cy.get('[formgroupname="billingAddress"] > :nth-child(3) > .col-md-9 > .input-space > .ng-untouched').type("Herold Street");
        // City
        cy.get('[formgroupname="billingAddress"] > :nth-child(4) > .col-md-9 > .input-space > .ng-untouched').type("Victoria");
        // State
        cy.get('[formgroupname="billingAddress"] > :nth-child(5) > .col-md-9 > .input-space > .ng-untouched').type("British Columbia");
        // ZipCode 
        cy.get('[formgroupname="billingAddress"] > :nth-child(6) >.col-md-9 > .input-space > .ng-untouched').type("4A2-L9B");


    });

    it('Billing Information', () => {
        // Fill Billing Info

        // Visa
        cy.get('[formControlName="cardType"]').select('Visa');
        // Name on Card 
        cy.get('[formControlName="nameOnCard"]').type("John Doe");
        // Street 
        cy.get('[formControlName="CardNumber"]').type("1234123412341234");
        // City
        cy.get('[formControlName="securityCode"]').type("321");
        // State
        cy.get('[formControlName="expirationMonth"]').select('8');
        // ZipCode 
        cy.get('[formControlName="expirationYear"]').select('2023');


    });

    it('Purchase Success', () => {

        // Click Purchase button
        cy.get('#PurchaseBtn').click();


    });

});