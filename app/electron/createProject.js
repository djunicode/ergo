const sh = require("shelljs");
const log = require("electron-log");

module.exports = (cmd) => {
  return new Promise((resolve, reject) => {
    sh.exec(cmd, { silent: true }, (code, stdout, stderr) => {
      if (code !== 0) {
        log.error(stderr);
        reject(stderr);
      } else if (code === 0) {
        log.info("Successfully created Project");
        resolve({ success: true });
      }
    });
  });
};
