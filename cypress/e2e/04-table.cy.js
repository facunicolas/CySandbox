describe("Table selection", () => {
  beforeEach(() => {
    cy.visit("/challenging_dom");
  });

  it("Selection demo", () => {
    cy.xpath(`//*[@class="button"]`).should("be.visible")
  });
});
