/// <reference types = "cypress" />

context("sauce-demo", () => {
  it("full-test", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("equal", "https://www.saucedemo.com/inventory.html");
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get("#item_4_title_link > .inventory_item_name").click();

    cy.url().should(
      "equal",
      "https://www.saucedemo.com/inventory-item.html?id=4"
    );
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    cy.url().should("equal", "https://www.saucedemo.com/cart.html");
    cy.get('[data-test="checkout"]').click();

    cy.url().should(
      "equal",
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    cy.get('[data-test="firstName"]').type("isim");
    cy.get('[data-test="lastName"]').type("soyisim");
    cy.get('[data-test="postalCode"]').type("10001");
    cy.get('[data-test="continue"]').click();

    cy.url().should(
      "equal",
      "https://www.saucedemo.com/checkout-step-two.html"
    );
    cy.get('[data-test="finish"]').click();

    cy.url().should(
      "equal",
      "https://www.saucedemo.com/checkout-complete.html"
    );
    cy.get('[data-test="back-to-products"]').click();
  });
});
