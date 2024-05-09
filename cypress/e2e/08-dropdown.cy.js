describe('Dropdown', () => {
    beforeEach(() => {
        cy.visit('/dropdown');
    });
    it('Dropdown assertions', () => {
        cy.get('#dropdown').select("Option 1")
        cy.get('#dropdown').find('option[value="1"]').should("be.selected");
        cy.get('#dropdown').find('option[value="2"]').should("not.be.selected");
    });
});
//Seleccionamos el dropdown y con el select, elegimos una opcion
//Luego verificamos que el flag "selected" este para la opcion que elegimos y no en otra.