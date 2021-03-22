const sh = require("shelljs");

module.exports = (name, location, type) => {
  let returnValue = {
    sucess: false,
  };
  if (type === "node") {
    // Making a Projects Folder to store all the projects
    let cmd = `${location[0]}: && cd ${location} && mkdir Projects`;

    sh.exec(cmd, { silent: true }, (code) => {
      if (code !== 0) {
        returnValue = {
          success: true,
        };
      } else if (code === 0) {
        returnValue = {
          success: true,
        };
      }
    });

    // Traversing to inside the Projects Folder
    cmd = `${location[0]}: && cd ${location} && cd Projects && mkdir ${name} && cd ${name} && npm init -y`;
    sh.exec(cmd, { silent: true }, (code) => {
      if (code !== 0) {
        returnValue = {
          success: true,
        };
      } else if (code === 0) {
        returnValue = {
          success: true,
        };
      }
    });
  } else if (type === "django") {
    let cmd = `${location[0]}: && cd ${location} && mkdir Projects`;
    sh.exec(cmd, { silent: true }, (code) => {
      if (code !== 0) {
        returnValue = {
          success: true,
        };
      } else if (code === 0) {
        returnValue = {
          success: true,
        };
      }
    });

    cmd = `${location[0]}: && cd ${location} && cd Projects && django-admin startproject ${name} && cd ${name} && echo > requirements.txt`;
    sh.exec(cmd, { silent: true }, (code) => {
      if (code !== 0) {
        returnValue = {
          success: true,
        };
      } else if (code === 0) {
        returnValue = {
          success: true,
        };
      }
    });
  }
  return returnValue;
};
