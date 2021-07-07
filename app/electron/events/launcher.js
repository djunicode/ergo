/* eslint-disable consistent-return */
const { exec } = require("child_process");

// Opening to Projects folder
const { app } = require("electron");

exports.launchCodeEdiitor = (preferredEdittor, path) => {
  
  // Default Path to Projects Folder
  path = app.getPath("userData");
  path+="/Projects";
  // To open specific project in later versions
  // path+=`/Projects/${name_of_project}` 

  if (preferredEdittor === "Eclipse") {
    return new Promise((resolve, reject) => {
      exec(`eclipse "${path}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
  if (preferredEdittor === "Atom") {
    return new Promise((resolve, reject) => {
      exec(`atom "${path}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
  if (preferredEdittor === "Pycharm") {
    return new Promise((resolve, reject) => {
      exec(`pycharm64.exe "${path}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
  if (preferredEdittor === "VSCode") {
    return new Promise((resolve, reject) => {
      exec(`code "${path}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ success: true });
        }
      });
    });
  }
  return new Promise((resolve, reject) => {
    exec(`notepad "${path}"`, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ success: true });
      }
    });
  });
};

exports.launchFileManager = (path) => {

  // Default Path to Projects Folder
  path = app.getPath("userData");
  path+="/Projects";
  // To open specific project in later versions
  // path+=`/Projects/${name_of_project}`

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
