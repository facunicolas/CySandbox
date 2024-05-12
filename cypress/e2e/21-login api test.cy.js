describe("Login Api test", () => {

  function login(user, password) {
    cy.get("#userName").type(user);
    cy.get("#password").type(password);
    cy.get("#login").click();
  }

  it("Successful login", () => {
    cy.visit(`${Cypress.env("demoqa")}/login`);
    cy.intercept("POST", `${Cypress.env("demoqa")}/Account/v1/Login`).as(
      "loginRequest"
    );

    login("test", "Test1234*");

    cy.wait("@loginRequest").then((request) => {
      cy.log("This is the login request: ", request);

      expect(request.request.body).to.contain({
        userName: "test",
        password: "Test1234*",
      });

      expect(request.response.body).to.contain({
        username: "test",
      });

      cy.request("POST", "https://demoqa.com/Account/v1/Login", {
        userName: "test",
        password: "Test1234*",
      }).then((response) => {
        expect(response.status).to.be.equal(200);
      });
    });
  });

  it("UNsuccessful login", () => {
    cy.visit(`${Cypress.env("demoqa")}/login`);

    cy.intercept(
      "POST",
      `${Cypress.env("demoqa")}/Account/v1/GenerateToken`
    ).as("loginRequest");

    login("wrongUser", "wrongPassword");

    cy.wait("@loginRequest").then((request) => {
      expect(request.request.body).to.contain({
        userName: "wrongUser",
        password: "wrongPassword",
      });

      expect(request.response.body).to.not.contain({
        username: "test",
      });

      cy.request("POST", "https://demoqa.com/Account/v1/GenerateToken", {
        userName: "wrongUser",
        password: "wrongPassword",
      }).then((response) => {
        expect(response.body.result).to.contain("User authorization failed.");
      });
    });
  });

});
