describe('Checkboxes', () => {
    
    beforeEach(() => {
        cy.visit('/checkboxes');
    });
    
    it('checkboxes assertion', () => {
        cy.get("#checkboxes input:nth-child(1)").should("not.be.checked");
        cy.get("#checkboxes input:nth-child(3)").should("be.checked") //es el child 3 porque el 2 es un <br>
    });

    it('checkboxes changing state', () => {
        cy.get("#checkboxes input:nth-child(1)").click().should("be.checked");
        cy.get("#checkboxes input:nth-child(3)").click().should("not.be.checked");
    });

});
