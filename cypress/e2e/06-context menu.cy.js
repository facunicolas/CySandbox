describe('Context menu (js alert)', () => {
    
    beforeEach(() => {
        cy.visit('/context_menu');
    });

    it('pop up appearing test', () => {

        cy.get("#hot-spot").rightclick();
        cy.on("window:alert", (message) => {
            expect(message).to.be.equal('You selected a context menu');
        });
        
    });
});