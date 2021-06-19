const log = require("electron-log");
const {
  OpenTerminalWithCommand,
  LaunchDefaultEditor,
  LaunchFileManager,
  CreateProject,
  OpenTerminalWithCommandReply,
  LaunchDefaultEditorReply,
  LaunchFileManagerReply,
  CreateProjectReply,
} = require("./events");
const { launchCodeEdiitor, launchFileManager } = require("./launcher");
const createProj = require("./interfaceCreateProject");
const { openTerm } = require("../platform");

const validSendChannels = [
  OpenTerminalWithCommand,
  LaunchDefaultEditor,
  CreateProject,
  LaunchFileManager,
];
const validReceiveChannels = [
  OpenTerminalWithCommandReply,
  LaunchDefaultEditorReply,
  CreateProjectReply,
  LaunchFileManagerReply,
];

exports.preloadBindings = (ipcRenderer /* fs */) => {
  return {
    send: (channel, info) => {
      if (validSendChannels.includes(channel)) {
        switch (channel) {
          case OpenTerminalWithCommand:
          case CreateProject:
          case LaunchDefaultEditor:
          case LaunchFileManager:
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
          switch (channel) {
            case OpenTerminalWithCommandReply:
            case LaunchDefaultEditorReply:
            case CreateProjectReply:
            case LaunchFileManagerReply:
              func(args);
              break;
            default:
              break;
          }
        });
      }
    },
    clearRendererBindings: () => {
      // Clears all listeners
      for (let i = 0; i < validReceiveChannels.length; i += 1) {
        ipcRenderer.removeAllListeners(validReceiveChannels[i]);
      }
    },
  };
};

exports.mainBindings = (ipcMain /* , browserWindow, fs, mpc */) => {
  ipcMain.on(OpenTerminalWithCommand, (event, args) => {
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
          createproject: {
            msg: err,
            status: 1,
          },
        });
      });
  });
  ipcMain.on(LaunchDefaultEditor, (event, args) => {
    const { preferredEdittor, path } = args.info.launcheditor;
    launchCodeEdiitor(preferredEdittor, path)
      .then(() => {
        log.info(`opened a project at ${path} ${preferredEdittor}`);
        event.sender.send(LaunchDefaultEditorReply, {
          launcheditor: {
            msg: "OPENED EDITOR",
            status: 0,
          },
        });
      })
      .catch((err) => {
        log.error(`couldn't open project at ${path} in ${preferredEdittor}`);
        event.sender.send(LaunchDefaultEditorReply, {
          launcheditor: {
            msg: err,
            status: 1,
          },
        });
      });
  });
  ipcMain.on(LaunchFileManager, (event, args) => {
    const { path } = args.info.launchmanager;
    launchFileManager(path)
      .then(() => {
        log.info(`opened a project at ${path} in file manager`);
        event.sender.send(LaunchFileManagerReply, {
          launchmanager: {
            msg: "OPENED FILE MANAGER",
            status: 0,
          },
        });
      })
      .catch((err) => {
        log.error(`couldn't open project at ${path} in file manager`);
        event.sender.send(LaunchFileManagerReply, {
          launchmanager: {
            msg: err,
            status: 1,
          },
        });
      });
  });
};
