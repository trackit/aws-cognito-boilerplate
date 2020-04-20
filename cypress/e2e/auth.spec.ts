describe("Sign In to Sign Up component", () => {
  it("Sign Up link should display Sign Up component", () => {
    cy.visit("/");
    cy.findByTestId("sign-in-create-account-link").click();
    cy.findByTestId("sign-up-create-account-button").should("be.visible");
  });

  it("Sign In link should display Sign In component", () => {
    cy.findByTestId("sign-up-sign-in-link").click();
    cy.findByTestId("sign-in-sign-in-button").should("be.visible");
  });
});

describe("Reset password component", () => {
  it("Reset password link should display reset password component", () => {
    cy.visit("/");
    cy.findByTestId("sign-in-forgot-password-link").click();
    cy.findByTestId("forgot-password-send-code-button").should("be.visible");
  });

  it("Back to Sign In link should display Sign In component", () => {
    cy.findByTestId("forgot-password-back-to-sign-in-link").click();
    cy.findByTestId("sign-in-sign-in-button").should("be.visible");
  });
});
