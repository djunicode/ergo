const { exec } = require("child_process");

const gnomeTerminal = "gnome-terminal --tab --active -- bash -c ";
const xTerm = "xterm -fa 'Monospace' -fs 12 -e /bin/bash -l -c ";
// append command to xTerm and then append ';exec bash';
// append command to gnomeTerminal and then append '; exec bash'
const insertCommandLinux = (arrCommand, type) => {
  const command = arrCommand.join(" ");
  if (type === "xterm") {
    return `${`${xTerm}'${command}`};/bin/bash'`;
  }
  return `${`${gnomeTerminal}'${command}`}; exec bash'`;
};
module.exports = (arrCommand, type = "gnomeTerminal") => {
  return new Promise((resolve, reject) => {
    const executableString = insertCommandLinux(arrCommand, type);
    exec(executableString, (err) => {
      if (err) {
        reject(err);
      } else resolve(0);
    });
  });
};
