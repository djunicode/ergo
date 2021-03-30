const { spawn } = require("child_process");

const cmd = ["/k", "start", "cmd.exe", "/k"];

const insertCommandWin = (arrCommand) => {
  return cmd.concat(arrCommand);
};

module.exports = (arrCommand) => {
  return new Promise((resolve, reject) => {
    const executableArray = insertCommandWin(arrCommand);
    const child = spawn("cmd", executableArray, {
      detached: true,
      stdio: ["ignore", "ignore", "ignore"],
    });
    child.on("error", (err) => {
      reject(err);
    });
    child.on("exit", () => {
      resolve(0);
    });
    child.unref();
  });
};
