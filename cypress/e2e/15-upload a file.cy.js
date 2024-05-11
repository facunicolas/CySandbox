describe('Uploading a file', () => {
    beforeEach(() => {
        cy.visit('/upload');
    });
    it('upload assertion', () => {
        cy.get('#file-upload').attachFile('example.json');
        cy.get('#file-upload').should("contain", "example.json");
    });
});