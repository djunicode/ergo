const fs = require("fs");

const { log } = console;
module.exports = (filename) => {
  log(`Calling my file function with filename ${filename}`);
  log("Accessing fs :", fs.existsSync("./app/electron/my-functions"));
  log("Exiting my file function");
};
