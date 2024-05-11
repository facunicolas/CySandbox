//? Esta web muestra un modal cuando el mouse sale del viewport

describe('Modal when mouse exits viewport', () => {
    
    beforeEach(() => {
        cy.visit('/exit_intent');
    });

    it('Modal appearing test', () => {
        cy.get('.modal').should("not.be.visible")
        cy.get('#flash-messages').trigger("mouseleave");
        cy.get('.modal').should("be.visible")
    });
});