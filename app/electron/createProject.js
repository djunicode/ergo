const sh = require("shelljs");
const log = require("electron-log");

// Examples
/*
let project1 = {
  name : "hello1",
  type : "node"
}
*/

module.exports = (project, location) => {
  // Making a Projects Folder to store all the projects
  let cmd = `${location[0]}: && cd ${location} && mkdir Projects`;

  sh.exec(cmd, { silent: true }, (code,stdout,stderr) => {
    if (code !== 0) {
      log.error(stderr);
    } else if (code === 0) {
      log.info("Projects Folder successfully created")
    }
  });

  if (project.type === "node") {
    // Traversing to inside the Projects Folder
    cmd = `mkdir ${project.name} && cd ${project.name} && npm init -y`;
  } else if (project.type === "django") {
    cmd = `django-admin startproject ${project.name} && cd ${project.name} && echo > requirements.txt`;
  }

  return new Promise((resolve, reject) => {
    sh.exec(`${location[0]}: && cd ${location} && cd Projects && ${cmd}`,{ silent: true },(code , stdout , stderr) => {
        if (code !== 0) {
          log.error(stderr);
          reject(stderr);
        } else if (code === 0) {
          log.info(`Successfully created Project : ${project.name}`)
          resolve({ success: true });
        }
      }
    );
  });
};
