describe('Login - cookies - session', () => {
    
    beforeEach(() => {
        cy.visit('https://demoqa.com/profile');
    });

    //Simple login function without env variables
    //Does not preserve session

    function login (user, password) { 
        cy.get('#userName').type(user);
        cy.get('#password').type(password);
        cy.get('#login').click();
    }
    
    it('successful login', () => {
        cy.get('[href="/login"]').click();
        login("test", "Test1234*");
        cy.url().should("contain", "profile");
        
    });

    it.only('unsuccessful login', () => {
        cy.get('[href="/login"]').click();
        login("wrongUser", "Test1234*");
        cy.get('#name').should("contain", "Invalid username or password!");
        cy.url().should("not.contain", "profile");
    });

});