const { app } = require("electron");

// Include shelljs to run shell commands in node
const sh = require("shelljs");

// Path of config.json file : C:\Users\[USER_NAME]\AppData\Roaming\[APP_NAME]

const ElectronStore = require("electron-store");

const log = require("electron-log");

const commands = require("./commands");

const location = app.getPath("userData");

const newElectronStore = new ElectronStore();

module.exports = () => {
  // Checking for the Operating System
  if (process.platform === "darwin") {
    newElectronStore.set("platform", "mac");
  } else if (process.platform === "linux") {
    newElectronStore.set("platform", "linux");
  } else {
    newElectronStore.set("platform", "win");
  }

  // Making a Projects Folder to store all the projects
  let cmd = "";
  if (process.platform === "linux") {
    cmd = `cd ${location} && mkdir Projects`;
  } else if (process.platform === "win32") {
    cmd = `${location[0]}: && cd ${location} && mkdir Projects`;
  }

  sh.exec(cmd, { silent: true }, (code, stdout, stderr) => {
    if (code !== 0) {
      log.error(stderr);
    } else if (code === 0) {
      log.info("Projects Folder successfully created");
    }
  });

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
