describe("Flaky test", function () {
  for (let i = 1; i <= 10; i++) {
    it(`should pass ${i * 10}% of the time`, function () {
      const subject = Math.random();
      cy.wrap(subject).should("be.lt", i / 10);
    });
  }
});
