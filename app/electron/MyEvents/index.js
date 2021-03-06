const { MakeFileRequest } = require("./events");
const newFile = require("./newFile");

const validSendChannels = [MakeFileRequest];
const validReceiveChannels = [MakeFileRequest];
const { log } = console;
const debug = true;

// THis is in front end
// logs will appear in dev tools console
// This first filters channels / type of requests
// and if valid, only then passes on to backend
exports.preloadBindings = (ipcRenderer /* fs */) => {
  return {
    send: (channel, filename) => {
      if (validSendChannels.includes(channel)) {
        switch (channel) {
          case MakeFileRequest:
            if (debug) {
              log(`requesting to make file '${filename}'`);
            }

            ipcRenderer.send(channel, {
              filename,
            });
            break;
          default:
            break;
        }
      } else {
        log(`Invalid channel ${channel}`);
      }
    },
    onReceive: (channel, func) => {
      if (validReceiveChannels.includes(channel)) {
        // Deliberately strip event as it includes "sender"
        ipcRenderer.on(channel, (/* event, */ args) => {
          if (debug) {
            switch (channel) {
              case MakeFileRequest:
                log(`received file name '${args.filename}'`);
                break;
              default:
                break;
            }
          }
          func(args);
        });
      }
    },
    clearRendererBindings: () => {
      // Clears all listeners
      if (debug) {
        log(`clearing all ipcRenderer listeners.`);
      }

      for (let i = 0; i < validReceiveChannels.length; i += 1) {
        ipcRenderer.removeAllListeners(validReceiveChannels[i]);
      }
    },
  };
};

// This is in backend
// The logs will appear in console where npm run dev is done
// this checks if channel are valid as well and takes actual actions
exports.mainBindings = (ipcMain /* , browserWindow, fs, mpc */) => {
  ipcMain.on(MakeFileRequest, (/* IpcMainEvent, */ args) => {
    if (debug) {
      log(
        `received a request to read store in electron main process.${JSON.stringify(
          args
        )}`
      );
      newFile(args.filename);
    }
  });
};
