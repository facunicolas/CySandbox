describe('Dynamic controls', () => {
    beforeEach(() => {
        cy.visit('/dynamic_controls');
    });

    it('Remove and Add a checkbox', () => {
        cy.get('#checkbox > input').should("be.visible") //?chequear que existe
        cy.xpath(`//*[@id="checkbox-example"]/button`).debug().click().debug(); //boton que lo elimina
        //? uso debug para frenar la pagina y poder capturar una barra de carga
        cy.get("div#loading").should("be.visible"); //hago el assertion para la barra de carga
        cy.get('#checkbox > input').should("not.exist"); //? chequeo que no existe
    });

    it('Enable and disable button', () => {
        cy.xpath(`/html/body/div[2]/div/div[1]/form[2]/input`).should("be.disabled");
        cy.get('#input-example > button').click();
        cy.xpath(`/html/body/div[2]/div/div[1]/form[2]/input`).should("be.enabled");
        cy.get('#message').should("have.text", "It's enabled!")
    });
});