// To check inbuilt programs are installed or not
// Include shelljs to run shell commands in node
const sh = require("shelljs");

// Include electron-store to store the information in :
// C:\Users\[USER_NAME]\AppData\Roaming\[APP_NAME]
const ElectronStore = require("electron-store");

const newElectronStore = new ElectronStore();

module.exports = function () {
  // Checking for the Operating System
  if (process.platform === "darwin") {
    newElectronStore.set("platform.Mac", true);
    newElectronStore.set("platform.Windows", false);
    newElectronStore.set("platform.Linux", false);
  } else if (process.platform === "linux") {
    newElectronStore.set("platform.Windows", false);
    newElectronStore.set("platform.Mac", false);
    newElectronStore.set("platform.Linux", true);
  } else {
    newElectronStore.set("platform.Linux", false);
    newElectronStore.set("platform.Mac", false);
    newElectronStore.set("platform.Windows", true);
  }

  const commands = [
    {
      key: "java",
      value: "java  -version",
    },
    {
      key: "node",
      value: "node -v",
    },
    {
      key: "python",
      value: "py --version",
    },
    {
      key: "conda",
      value: "conda -V",
    },
    {
      key: "c",
      value: "gcc --version",
    },
    {
      key: "php",
      value: "php -v",
    },
    {
      key: "npm",
      value: "npm -v",
    },
    {
      key: "jupyter-notebook",
      value: "jupyter-notebook --version",
    },
  ];

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
