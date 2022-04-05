/// <reference types = "cypress" />

it("confirm-box", () => {
  cy.visit("http://webdriveruniversity.com/Popup-Alerts/index.html");
  const stub = cy.stub();
  cy.on("window:confirm", stub);
  cy.get("#button4")
    .click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      cy.get("#confirm-alert-text").contains("You pressed OK!");
    });
});

it("alert", () => {
  cy.visit("http://webdriveruniversity.com/Popup-Alerts/index.html");

  const stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get("#button1")
    .click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith("I am an alert box!");
    });
});

it("modal", () => {
  cy.visit("http://webdriveruniversity.com/Popup-Alerts/index.html");

  cy.get("#button2").click();
  cy.get(".modal-footer > .btn").click();
});
