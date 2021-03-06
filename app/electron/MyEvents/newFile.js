const fs = require("fs");

module.exports = (filename) => {
  console.log(`Calling my file function with filename ${filename}`);
  console.log("Accessing fs :", fs.existsSync("./app/electron/my-functions"));
  console.log("Exiting my file function");
};
