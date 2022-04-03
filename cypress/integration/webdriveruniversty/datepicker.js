/// <reference types = "cypress" />

it("date picker", () => {
  cy.visit("http://webdriveruniversity.com/Datepicker/index.html");

  let date = new Date();
  date.setDate(date.getDate() + 40);
  let futureDay = date.getDate();
  let futureMonth = date.toLocaleString("en-us", { month: "long" });
  console.log(
    "🚀 ~ file: datepicker.js ~ line 10 ~ it ~ futureMonth",
    futureMonth
  );

  cy.get(".input-group-addon").then((input) => {
    cy.wrap(input).click();

    cy.get(".form-control")
      .invoke("val")
      .then((dateAttribute) => {
        const setTime = new Date(dateAttribute).toLocaleString("en-us", {
          month: "long",
        });
        console.log(setTime);
        if (setTime.includes(futureMonth)) {
          cy.get(".datepicker").contains(futureDay).click();
        } else {
          cy.get(".input-group-addon").click();
          cy.get(
            ".datepicker-days > .table-condensed > thead > :nth-child(1) > .next"
          ).click();
          cy.get(".datepicker").contains(futureDay).click();
        }
      });
  });
});
