describe('Dynamic Load Element', () => {

    it('Element that is hidden', () => {
        cy.visit('/dynamic_loading/1');
        cy.get('button').click();
        cy.get("div#loading").should("be.visible")
        cy.get('#finish > h4').should("have.text", "Hello World!")
    });

    it.only('Element with wait needed', () => {
        cy.visit('/dynamic_loading/2');
        cy.get('button').click(); 
        cy.get("div#loading").should("be.visible")
        cy.wait(7000); //Se requiere una espera para que se renderice el elemento
        cy.get('#finish > h4').should("have.text", "Hello World!") //Ahora si podemos encontrar el elemento
    });
});