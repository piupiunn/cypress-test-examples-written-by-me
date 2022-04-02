/// <reference types= "cypress" />

it("table", () => {
  cy.visit("http://webdriveruniversity.com/To-Do-List/index.html");
  cy.get("input").click().type("Todo eklendi{enter}");
  cy.get("ul").should("contain", "Todo eklendi");
  cy.get("ul")
    .contains("li", "Todo eklendi")
    .click()
    .should("have.class", "completed");
  cy.get(":nth-child(4) > span > .fa")
    .click()
    .should("not.contain", "Todo eklendi");
});
