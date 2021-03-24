const { exec } = require("child_process");
const log = require("electron-log");

function launchCodeEdiitor(preferredEdittor, path) {
  if (preferredEdittor === "Eclipse") {
    exec(`eclipse "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  } else if (preferredEdittor === "Atom") {
    exec(`atom "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  } else if (preferredEdittor === "Pycharm") {
    exec(`pycharm64.exe "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  } else if (preferredEdittor === "VSCode") {
    exec(`code "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  } else {
    exec(`notepad "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  }
}

function launchFileManager(path) {
  if (process.platform === "linux") {
    exec(`xdg-open "${path}"`);
  }
  if (process.platform === "win") {
    exec(`explorer "${path}"`);
  }
}
launchFileManager("add path here");
launchCodeEdiitor("add language", "C:\\path\\to\\folder\\here");
module.exports = launchCodeEdiitor;
