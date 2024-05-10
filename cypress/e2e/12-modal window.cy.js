describe('Modal window', () => {
    
    beforeEach(() => {
        cy.visit('/entry_ad');
    });
    
    it('Modal window assertion', () => {
        cy.get("div#modal").should("be.visible")
        cy.get('.modal-footer > p').click();
        cy.get("div#modal").should("not.be.visible");
    });

    it('Underlay assertion', () => {
        cy.get("div#modal").should("be.visible")
        cy.get("div.modal").invoke("remove"); //! Elimina un elemento del dom
        //! Eliminar el elemento me permite corroborar el fondo
        //? Verificar atributo CSS del elemento
        cy.get("div.underlay").should("have.css", "background-color", "rgba(0, 0, 0, 0.5)"); 
        cy.get("div.underlay").should("be.visible")
    });

});