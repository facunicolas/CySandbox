describe("Login page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  function login (user, pass) {
    cy.get("#username").type(user);
    cy.get("#password").type(password);
    cy.get(".fa").click();
  }

  it("wrong login attempt", () => {
    login("worngUser", "worngPassword");
    cy.xpath("/html/body/div[1]/div/div/text()").then((message) => {
      let wrongUsernameMessage = message[0].data;
      expect(wrongUsernameMessage).to.contain("Your username is invalid");
    });
  });

  it("Successful login attempt", () => {
    login("tomsmith", "SuperSecretPassword!");
    cy.xpath("/html/body/div[1]/div/div/text()").then((message) => {
      let wrongUsernameMessage = message[0].data;
      expect(wrongUsernameMessage).to.contain("You logged into a secure area!");
    });
  });
});
