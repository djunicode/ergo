/* eslint-disable consistent-return */
const { exec } = require("child_process");
const log = require("electron-log");

exports.launchCodeEdiitor = function (preferredEdittor, path) {
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
    return new Promise((resolve, reject) => {
      exec(`code "${path}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ success: true });
        }
      });
    });
  } else {
    exec(`notepad "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  }
};

exports.launchFileManager = function (path) {
  if (process.platform === "linux") {
    return new Promise((resolve, reject) => {
      exec(`xdg-open "${path}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
  if (process.platform === "win32") {
    return new Promise((resolve, reject) => {
      exec(`explorer ${path}`, (code, stdout, stderr) => {
        if (stderr) {
          reject(stderr);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
};
// exports.launchCodeEdiitor("VSCode", "C:\\Users\\hrida\\OneDrive\\Documents");
// exports.launchFileManager("C:\\Users\\hrida\\OneDrive\\Documents");
