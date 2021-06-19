const { expect } = require("chai");

describe("Demo Test Group", () => {
  it("Should show how testing is done", () => {
    const demoReturn = { key1: "val1" }; // Call actual Function instead
    expect(demoReturn).to.have.property("key1");
    expect(demoReturn.key1).to.be.equal("val1");
  });
});
