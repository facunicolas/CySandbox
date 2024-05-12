Cypress.session.clearAllSavedSessions(); //Clean all sessions

describe('Login - preserve session', () => {
    
    // login function
    function login (user, password) { 
        cy.get('#userName').type(user);
        cy.get('#password').type(password);
        cy.get('#login').click();
    }

    //before each with session preservation
    beforeEach(() => { 
        cy.session("Sessions", () =>{
            cy.visit(`${Cypress.env("demoqa")}/login`);
            login("test", "Test1234*");
            cy.url().should("contain", "profile");
        });
    });

    it('Session verification', () => {
        cy.visit(`${Cypress.env("demoqa")}/login`);
        cy.get('#userName-value').should("contain", "test");
        

    });



}); 