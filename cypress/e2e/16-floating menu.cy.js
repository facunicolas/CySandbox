describe('Floating menu', () => {
    
    beforeEach(() => {
        cy.visit('/floating_menu');
    });
    
    function areMenuesVisible (){
        cy.get('#menu li:nth-child(1) a').should("be.visible") //HOME
        cy.get('#menu li:nth-child(2) a').should("be.visible") //NEWS
        cy.get('#menu li:nth-child(3) a').should("be.visible") //CONTACT
        cy.get('#menu li:nth-child(4) a').should("be.visible") //ABOUT
    };

    it('floating menu keeps in site after scrolling', () => {
        areMenuesVisible();
        cy.get('.scroll > :nth-child(3)').scrollIntoView() //Scroll to mid site
        areMenuesVisible();
        cy.get('.large-4').scrollIntoView() //Scroll to bottom of the site
        areMenuesVisible();
    });
});