// Include shelljs to run shell commands in node
const sh = require("shelljs");

// Path of config.json file : C:\Users\[USER_NAME]\AppData\Roaming\[APP_NAME]

const ElectronStore = require("electron-store");

const newElectronStore = new ElectronStore();

const commands = require("./commands");

module.exports = () => {
  // Checking for the Operating System
  if (process.platform === "darwin") {
    newElectronStore.set("platform", "mac");
  } else if (process.platform === "linux") {
    newElectronStore.set("platform", "linux");
  } else {
    newElectronStore.set("platform", "win");
  }

  commands.forEach((command) => {
    sh.exec(command.value, { silent: true }, (code) => {
      if (code !== 0) {
        newElectronStore.set(`languages.${command.key}`, false);
      } else if (code === 0) {
        newElectronStore.set(`languages.${command.key}`, true);
      }
    });
  });
};
