describe("template spec", () => {
  it("should load the homepage", () => {
    cy.visit("/");
    cy.contains("Welcome Back").should("exist");
    cy.contains("Sign in to your account to continue")
      .should("exist")
      .and("be.visible");
    cy.get("#username").type("user");
    cy.get("#password").type("pass");
    cy.get("button[type='submit']").click();
    cy.contains("Dashboard").should("exist");
  });
});
