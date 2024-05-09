describe('Add and remove elements', () => {
  
  beforeEach(() => {
    cy.visit("/add_remove_elements/");
  });

  it('passes', () => {
    cy.get('button').click();
    cy.get('.added-manually').should("be.visible")
    cy.get('.added-manually').click();
    cy.get('.added-manually').should("not.exist")
  })
})