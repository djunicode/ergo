const { app } = require("electron");
const createProject = require("./createProject");

// Examples
/*
let project1 = {
  name : "hello1",
  type : "node"
}
*/
const destinationFolder = "";
let cmd = "";
module.exports = (project, location = destinationFolder) => {
  if (location === "") location = app.getPath("userData");

  if (process.platform === "win32") {
    if (project.type === "node") {
      // Traversing to inside the Projects Folder
      cmd = `${location[0]}: && cd ${location} && cd Projects && mkdir ${project.name} && cd ${project.name} && npm init -y`;
    } else if (project.type === "django") {
      cmd = `${location[0]}: && cd ${location} && cd Projects && django-admin startproject ${project.name} && cd ${project.name} && echo > requirements.txt`;
    }
  } else if (process.platform === "linux") {
    if (project.type === "node") {
      // Traversing to inside the Projects Folder
      cmd = `cd ${location}/Projects && mkdir ${project.name} && cd ${project.name} && npm init -y`;
    } else if (project.type === "django") {
      cmd = `cd ${location}/Projects && django-admin startproject ${project.name} && cd ${project.name} && touch requirements.txt`;
    }
  }

  return createProject(cmd);
};
