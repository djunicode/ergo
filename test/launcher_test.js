const { expect } = require("chai");
const { launchCodeEdiitor } = require("../app/electron/launcher");
const { launchFileManager } = require("../app/electron/launcher");

describe("Launch given code editor", () => {
  it("Should launch the given code editor at the desired location", async () => {
    const result = await launchCodeEdiitor(
      "VSCode",
      "C:\\Users\\hrida\\OneDrive\\Documents"
    );
    expect(result).to.have.property("success");
    expect(result.success).to.equal(true);
  });
  it("Should launch the File Explorer at the desired location", async () => {
    const result = await launchFileManager(
      "C:\\Users\\hrida\\OneDrive\\Documents"
    );
    expect(result).to.have.property("success");
    expect(result.success).to.equal(true);
  });
});
