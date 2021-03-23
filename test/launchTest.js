const { exec } = require("child_process");
const log = require("electron-log");

function launchCodeEdiitor(language, path) {
  if (language === "Java") {
    exec(`eclipse "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  } else if (language === "C") {
    exec(`notepad "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  } else if (language === "HTML" || "CSS") {
    exec(`atom "${path}"`, (error) => {
      if (error) {
        try {
          exec(`code "${path}"`);
        } finally {
          log.error(error);
        }
      }
    });
  } else {
    exec(`code "${path}"`, (error) => {
      if (error) {
        log.error(error);
      }
    });
  }
}

function launchFileManager(path) {
  if (process.platform === "linux") {
    exec(`xdg-open "${path}"`);
  } else;
  exec(`explorer "${path}"`);
}
launchFileManager("add path here");
launchCodeEdiitor("add language", "C:\\path\\to\\folder\\here");
