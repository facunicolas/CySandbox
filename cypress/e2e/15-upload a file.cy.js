describe('Uploading a file', () => {
    beforeEach(() => {
        cy.visit('/upload');
    });

    it('upload by button', () => {
        cy.get('#file-upload').attachFile('example.json');
        cy.get('#file-upload').should("contain", "example.json");
    });

    it.only('upload by drag and drop zone', () => {
        //! el "subjectType" es una configuracion para los "drag and drop"
        cy.get('#drag-drop-upload').attachFile('example.json', { subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload').should("contain", "example.json");
    });
});

