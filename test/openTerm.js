const { existsSync, unlink } = require("fs");
const { assert } = require("chai");
const { after } = require("mocha");
const log = require("electron-log");
const openTermLinux = require("../app/electron/platform/linux/openTerm");
const openTermWin = require("../app/electron/platform/windows/openTerm");

after(() => {
  unlink("./test.txt", (err) => {
    if (err) log.error(err);
    else log.info("Test completed and file deleted");
  });
});
if (process.platform === "linux") {
  describe("Open Terminal", () => {
    it("Should open terminal and create file [test.txt]", async () => {
      const arrCommandType = ["touch", "./test.txt"];
      await openTermLinux(arrCommandType);
      const isFile = existsSync("./test.txt");
      assert(isFile, true);
    });
  });
} else if (process.platform === "win32") {
  describe("Open Terminal", () => {
    it("Should open terminal and create file [test.txt]", async () => {
      const arrCommandType = ["echo", ".>", "test.txt"];
      await openTermWin(arrCommandType);
      const isFile = existsSync("./test.txt");
      assert(isFile, true);
    });
  });
  /* this test cannot delete the file because the cmd
   * spawned keeps the file created open
   */
}
