const log = require("electron-log");
const {
  OpenTerminalWithCommand,
  LaunchDefaultEditor,
  CreateProject,
  OpenTerminalWithCommandReply,
  LaunchDefaultEditorReply,
  CreateProjectReply,
} = require("./events");
// const launcher = require("./launcher");
const createProj = require("./interfaceCreateProject");
const { openTerm } = require("../platform");

const validSendChannels = [
  OpenTerminalWithCommand,
  LaunchDefaultEditor,
  CreateProject,
];
const validReceiveChannels = [
  OpenTerminalWithCommandReply,
  LaunchDefaultEditorReply,
  CreateProjectReply,
];

const debug = true;

// THis is in front end
// logs will appear in dev tools console
// This first filters channels / type of requests
// and if valid, only then passes on to backend
exports.preloadBindings = (ipcRenderer /* fs */) => {
  return {
    send: (channel, info) => {
      if (validSendChannels.includes(channel)) {
        switch (channel) {
          case OpenTerminalWithCommand:
          case CreateProject:
          case LaunchDefaultEditor:
            ipcRenderer.send(channel, {
              info,
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
        ipcRenderer.on(channel, (event, args) => {
          if (debug) {
            switch (channel) {
              case OpenTerminalWithCommandReply:
              case LaunchDefaultEditorReply:
              case CreateProjectReply:
                func(args);
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

exports.mainBindings = (ipcMain /* , browserWindow, fs, mpc */) => {
  ipcMain.on(OpenTerminalWithCommand, (event, args) => {
    // if (debug) {
    //   log(
    //     `received a request to open term in electron main process.
    //     ${JSON.stringify(
    //       args
    //     )}`
    //   );
    // }
    const params = args.info.openterm;
    if (params != null) {
      if (params.type !== null && params.type !== undefined) {
        openTerm(params.arrCommand, params.type)
          .then(() => {
            event.sender.send(OpenTerminalWithCommandReply, {
              openterm: {
                msg: "Terminal is now open",
                status: 0,
              },
            });
          })
          .catch((err) =>
            event.sender.send(OpenTerminalWithCommandReply, {
              openterm: {
                msg: err,
                status: 1,
              },
            })
          );
      } else {
        openTerm(params.arrCommand)
          .then(() => {
            event.sender.send(OpenTerminalWithCommandReply, {
              openterm: {
                msg: "Terminal is now open",
                status: 0,
              },
            });
          })
          .catch((err) =>
            event.sender.send(OpenTerminalWithCommandReply, {
              openterm: {
                msg: err,
                status: 1,
              },
            })
          );
      }
    }
  });
  ipcMain.on(CreateProject, (event, args) => {
    const { project, location } = args.info.createproject;
    createProj(project, location)
      .then(() => {
        log.info(`created a new project at ${location}`);
        event.sender.send(CreateProjectReply, {
          createproject: {
            msg: "PROJECT CREATED",
            status: 0,
          },
        });
      })
      .catch((err) => {
        log.error(`couldn't create project at ${location}`);
        event.sender.send(CreateProjectReply, {
          openterm: {
            msg: err,
            status: 1,
          },
        });
      });
  });
};
