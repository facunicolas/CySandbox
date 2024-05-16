describe("Data mocking", () => {

  function login(user, password) {
    cy.get("#userName").type(user);
    cy.get("#password").type(password);
    cy.get("#login").click();
  }

  beforeEach(() => {
    cy.visit(`${Cypress.env("demoqa")}/login`);
    cy.intercept(
      "GET",
      `${Cypress.env(
        "demoqa"
      )}/Account/v1/User/7d01de84-9527-4855-a10c-043a637178b3`, 
      { fixture: "mockedData.json" } //! Archivo que va a reemplazar al GET
    ).as("mockDemo");
  });

  it("Data mocking example", () => {
    login("test", "Test1234*");
    cy.wait("@mockDemo");
    cy.get("#userName-value").should("have.text", "Facundo Nicolas");
  });

  it('Card qty on screen', () => {
    
  });

});
