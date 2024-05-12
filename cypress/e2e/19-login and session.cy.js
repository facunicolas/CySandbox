describe('Login - cookies - session', () => {
    
    beforeEach(() => {
        cy.visit('https://demoqa.com/profile');
    });

    //Simple login function without env variables
    function login (user, password) { 
        cy.get('#userName').type(user);
        cy.get('#password').type(password);
        cy.get('#login').click();
        cy.url().should("contain", "profile");
    }
    
    it.only('successful login', () => {
        cy.get('[href="/login"]').click();
        login("test", "Test1234*");
    });

    it('successful login', () => {
        cy.get('[href="/login"]').click();
        // cy.get('#userName').type("test");
        // cy.get('#password').type("Test1234*");
        // cy.get('#login').click();
    });


});