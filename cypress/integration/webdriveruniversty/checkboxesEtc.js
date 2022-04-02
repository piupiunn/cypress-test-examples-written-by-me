/// <reference types="cypress" />

it("check boxes", () => {
  cy.visit(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  cy.get("#checkboxes > :nth-child(1) > input")
    .click({ force: true })
    .should("be.checked");

  cy.get(":nth-child(3) > input").click({ force: true }).should("be.checked");
  cy.get(":nth-child(5) > input")
    .click({ force: true })
    .should("not.be.checked");
  cy.get(":nth-child(7) > input").click({ force: true }).should("be.checked");
});

it("radio buttons", () => {
  cy.visit(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  cy.get("#radio-buttons")
    .find("[type='radio']")
    .then((radioButtons) => {
      cy.wrap(radioButtons).eq(0).click({ force: true }).should("be.checked");

      cy.wrap(radioButtons).eq(1).click({ force: true });

      cy.wrap(radioButtons).first().should("not.be.checked");
    });
});

it("dropdown menu", () => {
  cy.visit(
    "http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );

  cy.get(":nth-child(2) > .thumbnail > .section-title").then((dropdown) => {
    cy.get("#dropdowm-menu-1").each((listItem) => {
      const itemText = listItem.text();
      cy.wrap(listItem);
      cy.wrap(dropdown).should("contain", itemText);
    });
  });

  cy.get(":nth-child(2) > .thumbnail > .section-title").then((dropdown) => {
    cy.get("#dropdowm-menu-2").each((listItem) => {
      const itemText = listItem.text();
      cy.wrap(listItem);
      cy.wrap(dropdown).should("contain", itemText);
    });
  });

  cy.get(":nth-child(2) > .thumbnail > .section-title").then((dropdown) => {
    cy.get("#dropdowm-menu-3").each((listItem) => {
      const itemText = listItem.text();
      cy.wrap(listItem);
      cy.wrap(dropdown).should("contain", itemText);
    });
  });
});
