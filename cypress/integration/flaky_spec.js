describe("Flaky test", function () {
  for (let i = 1; i <= 100; i++) {
    it(`should pass ${i * 1}% of the time`, function () {
      const subject = 100 * Math.random();
      expect(subject).to.be.lt(i / 1);
    });

    describe("with a really long test name", function () {
      describe("like no, really really long", function () {
        it(`should pass ${i * 1}% of the time`, function () {
          const subject = 100 * Math.random();
          expect(subject).to.be.lt(i / 1);
        });
      });
    });
  }
});
