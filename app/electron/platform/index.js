const openTermWindows = require("./windows/openTerm.js");
const openTermLinux = require("./linux/openTerm.js");

const { platform } = process;
if (platform === "linux") {
  exports.openTerm = openTermLinux;
} else if (platform === "win32") {
  exports.openTerm = openTermWindows;
}
