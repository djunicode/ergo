const { existsSync, unlink } = require("fs");
const { assert } = require("chai");
const { after } = require("mocha");
const log = require("electron-log");
const { openTerm } = require("../app/electron/platform");

after(() => {
  unlink("./test.txt", (err) => {
    if (err) {
      log.error(err);
    } else {
      log.info("Test completed and file deleted");
    }
  });
});
describe("Open Terminal", () => {
  it("Should open terminal and create file [test.txt]", async () => {
    let arrCommandType;
    if (process.platform === "linux") {
      arrCommandType = ["touch", "./test.txt"];
    } else if (process.platform === "win32") {
      arrCommandType = ["echo", ".>", "test.txt"];
    }
    await openTerm(arrCommandType);
    const isFile = existsSync("./test.txt");
    assert(isFile, true);
  });
});
