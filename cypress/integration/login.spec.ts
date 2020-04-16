describe("Login Page", () => {
  it("Switch from Sign In to Sign Up", function() {
    cy.visit("http://localhost:3000");
    cy.contains('Sign In').should('exist');
    cy.get('a').click();
    cy.contains('Sign Up').should('exist');
  });
});

describe("Login Page", () => {
  it("Switch from Sign Up to Sign In", function() {
    cy.visit("http://localhost:3000");
    cy.contains('Sign in').should('exist');
    cy.get('a').click();
    cy.contains('Sign Up').should('exist');
    cy.get('a').click();
    cy.contains('Sign In').should('exist');
  });
});
