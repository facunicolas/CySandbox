describe("Broken images assertion", () => {
  beforeEach(() => {
    cy.visit("/broken_images");
  });

  it("Img assertion 1", () => {
    cy.get('div.example > img[src="img/avatar-blank.jpg"]').should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
       });
  });
  it("Img assertion 2", () => {
    cy.get('div.example > img[src="asdf.jpg"]').should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
       });
  });
  it("Img assertion 3", () => {
    cy.get('div.example > img[src="hjkl.jpg"]').should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
       });
  });
});
