describe("Login Page", () => {
  it("shows the correct heading", function() {
    cy.visit("http://localhost:3000");
    cy.get("h1")
      .should("be.visible")
      .and("have.text", "Login Page");
  });
});

describe("Register Page", () => {
    it("shows the correct heading", function() {
      cy.visit("http://localhost:3000/register");
      cy.get("h1")
        .should("be.visible")
        .and("have.text", "Register Page");
    });
  });
  