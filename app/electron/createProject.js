const sh = require("shelljs");

// Examples
/*
let project1 = {
  name : "hello1",
  type : "node"
}
*/

module.exports = (project, location) => {
  // Making a Projects Folder to store all the projects
  let cmd2 = "";

  if (project.type === "node") {
    // Traversing to inside the Projects Folder
    cmd2 = `mkdir ${project.name} && cd ${project.name} && npm init -y`;
  } else if (project.type === "django") {
    cmd2 = `django-admin startproject ${project.name} && cd ${project.name} && echo > requirements.txt`;
  }

  return new Promise((resolve, reject) => {
    sh.exec(
      `${location[0]}: && cd ${location} && mkdir Projects && cd Projects && ${cmd2}`,
      { silent: true },
      (code) => {
        if (code !== 0) {
          sh.exec(
            `${location[0]}: && cd ${location} && cd Projects && ${cmd2}`,
            { silent: true },
            (code1, stdout, stderr) => {
              if (code1 !== 0) {
                reject(stderr);
              } else if (code1 === 0) {
                resolve({ success: true });
              }
            }
          );
        } else if (code === 0) {
          resolve({ success: true });
        }
      }
    );
  });
};
