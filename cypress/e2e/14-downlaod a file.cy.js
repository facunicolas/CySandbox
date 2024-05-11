describe('Download data assertion', () => {
    
    beforeEach(() => {
        cy.visit('/download');
    });
    
    it('Downloading an image', () => {
        cy.contains("snickers2.jpg").click();
        cy.verifyDownload("snickers2.jpg");
    });

    it('Downloading a csv file', () => {
        cy.contains("BrowserStack - List of devices to test on.csv").click();
        cy.verifyDownload("BrowserStack - List of devices to test on.csv");
    });
});