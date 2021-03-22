const {
  app,
  protocol,
  BrowserWindow,
  session,
  ipcMain,
  Menu,
  dialog,
} = require("electron");
const {
  default: installExtension,
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
} = require("electron-devtools-installer");
const {
  mainBindings,
  clearMainBindings,
} = require("i18next-electron-fs-backend");
const Store = require("secure-electron-store").default;
const ContextMenu = require("secure-electron-context-menu").default;
const { parse, join } = require("path");
const fs = require("fs");
const log = require("electron-log");
// const { sync } = require("glob");
const electronDebug = require("electron-debug");
const { scheme, requestHandler } = require("./protocol");
const MenuBuilder = require("./menu");
// To check inbuilt programs are installed or not

const initialisationFunction = require("./initial");
// const createProject = require("./createProject");

const isDev = process.env.NODE_ENV === "development";
const port = 40992; // Hardcoded; needs to match webpack.development.js and package.json
const selfHost = `http://localhost:${port}`;
// Setup file logging

log.transports.file.level = "info";
log.transports.file = "logger.log";
const logFile = "logger.log";

function archiveLog(file) {
  file = file.toString();
  const info = parse(file);

  try {
    fs.renameSync(file, join(info.dir, `${info.name}.old${info.ext}`));
  } catch (e) {
    log.info("Could not rotate log", e);
  }
}

initialisationFunction();
// Example of project creation
/*
let returnValue = createProject("hello", app.getPath("userData"), "node");
if(returnValue.success === true)
{
  handleLogging
}else {
  handleLogging
}
*/

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let menuBuilder;
const dateOb = new Date();

const date = `0${dateOb.getDate()}`.slice(-2);

async function createWindow() {
  if (isDev) {
    await installExtension([REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS])
      .then((name) => log.info(`Added Extension:  ${name}`))
      .catch(
        log.catchErrors({
          showDialog: true,
          onError(error, versions, submitIssue) {
            dialog
              .showMessageBox({
                title: "An error occurred",
                message: error.message,
                detail: error.stack,
                type: "error",
                buttons: ["Ignore", "Report", "Exit"],
              })
              .then((result) => {
                if (result.response === 1) {
                  archiveLog(logFile);
                  submitIssue("https://github.com/djunicode/ergo/issues/new", {
                    title: `Error report for ${versions.app}`,
                    body:
                      `Error:\n\`\`\`${error.stack}\n\`\`\`\n` +
                      `OS: ${versions.os}` +
                      `Date:${date}`,
                  });
                  return;
                }
                if (result.response === 2) {
                  app.quit();
                }
              });
          },
        })
      );
  } else {
    // Needs to happen before creating/loading the browser window;
    // not necessarily instead of extensions, just using this code block
    // so I don't have to write another 'if' statement
    protocol.registerBufferProtocol(scheme, requestHandler);
  }
  const loadMainProcess = () => {
    // const files = sync(join(__dirname, "mainEvents/**/*.js"));
    // files.forEach((file) => require(file));
  };
  loadMainProcess();
  const store = new Store({
    path: app.getPath("userData"),
  });
  // Use saved config values for configuring your
  // BrowserWindow, for instance.
  // NOTE - this config is not passcode protected
  // and stores plaintext values
  // let savedConfig = store.mainInitialStore(fs);

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    title: `Getting started with secure-electron-template (v${app.getVersion()})`,
    webPreferences: {
      devTools: isDev,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      contextIsolation: true,
      enableRemoteModule: false,
      additionalArguments: [`storePath:${app.getPath("userData")}`],
      preload: join(__dirname, "preload.js"),
    },
  });

  // Sets up main.js bindings for our i18next backend
  mainBindings(ipcMain, win, fs);

  // Sets up main.js bindings for our electron store;
  // callback is optional and allows you to use store in main process
  const callback = function callback(success, initialStore) {
    log.info(
      `${!success ? "Un-s" : "S"}uccessfully retrieved store in main process.`
    );
    log.info(initialStore);
    /* {"key1": "value1", ... }
    Storing the initial store in the main process
    */
  };

  store.mainBindings(ipcMain, win, fs, callback);

  // Sets up bindings for our custom context menu
  ContextMenu.mainBindings(ipcMain, win, Menu, isDev, {
    loudAlertTemplate: [
      {
        id: "loudAlert",
        label: "AN ALERT!",
      },
    ],
    softAlertTemplate: [
      {
        id: "softAlert",
        label: "Soft alert",
      },
    ],
  });

  // Load app
  if (isDev) {
    win.loadURL(selfHost);
  } else {
    win.loadURL(`${scheme}://rse/index-prod.html`);
  }

  // Only do these things when in development
  if (isDev) {
    // Errors are thrown if the dev tools are opened
    // before the DOM is ready
    win.webContents.once("dom-ready", () => {
      // win.webContents.openDevTools(); // see https://github.com/reZach/secure-electron-template/issues/48
      electronDebug(); // https://github.com/sindresorhus/electron-debug
    });
  }

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  // https://electronjs.org/docs/tutorial/security#4-handle-session-permission-requests-from-remote-content
  const ses = session;
  const partition = "default";
  ses
    .fromPartition(partition)
    .setPermissionRequestHandler((webContents, permission, permCallback) => {
      const allowedPermissions = []; // Full list here: https://developer.chrome.com/extensions/declare_permissions#manifest

      if (allowedPermissions.includes(permission)) {
        permCallback(true); // Approve permission request
      } else {
        log.catchErrors({
          showDialog: false,
          onError(error, versions, submitIssue) {
            dialog
              .showMessageBox({
                title: "An error occurred",
                message: `The application tried to request permission for '${permission}' This permission was not whitelisted and has been blocked.`,
                detail: error.stack,
                type: "error",
                buttons: ["Ignore", "Report", "Exit"],
              })
              .then((result) => {
                if (result.response === 1) {
                  submitIssue("https://github.com/djunicode/ergo/issues/new", {
                    title: `Permission issue for ${versions.app}`,
                    body:
                      `Error:\n\`\`\`${error.stack}\n\`\`\`\n` +
                      `OS: ${versions.os}` +
                      `Date:${date}`,
                  });
                  return;
                }

                if (result.response === 2) {
                  app.quit();
                }
              });
          },
        });

        permCallback(false); // Deny
      }
    });

  // https://electronjs.org/docs/tutorial/security#1-only-load-secure-content;
  // The below code can only run when a scheme and host are defined, I thought
  // we could use this over _all_ urls
  // ses.fromPartition(partition).webRequest.onBeforeRequest({urls:["http://localhost./*"]}, (listener) => {
  //   if (listener.url.indexOf("http://") >= 0) {
  //     listener.callback({
  //       cancel: true
  //     });
  //   }
  // });

  menuBuilder = MenuBuilder(win, app.name);
  menuBuilder.buildMenu();
}

// Needs to be called before app is ready;
// gives our scheme access to load relative files,
// as well as local storage, cookies, etc.
// https://electronjs.org/docs/api/protocol#protocolregisterschemesasprivilegedcustomschemes
protocol.registerSchemesAsPrivileged([
  {
    scheme: scheme,
    privileges: {
      standard: true,
      secure: true,
    },
  },
]);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  } else {
    clearMainBindings(ipcMain);
    ContextMenu.clearMainBindings(ipcMain);
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// https://electronjs.org/docs/tutorial/security#12-disable-or-limit-navigation
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (contentsEvent, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    const validOrigins = [selfHost];

    // Log and prevent the app from navigating to a new page if
    // that page's origin is not whitelisted
    if (!validOrigins.includes(parsedUrl.origin)) {
      log.error(
        `The application tried to redirect to the following address: '${parsedUrl}'. This origin is not whitelisted and the attempt to navigate was blocked.`
      );
    }
  });

  contents.on("will-redirect", (contentsEvent, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    const validOrigins = [];

    // Log and prevent the app from redirecting to a new page
    if (!validOrigins.includes(parsedUrl.origin)) {
      log.error(
        `The application tried to redirect to the following address: '${navigationUrl}'. This attempt was blocked.`
      );
    }
    contentsEvent.preventDefault();
  });

  // https://electronjs.org/docs/tutorial/security#11-verify-webview-options-before-creation
  contents.on("will-attach-webview", (contentsEvent, webPreferences) => {
    // Strip away preload scripts if unused or
    // verify their location is legitimate
    delete webPreferences.preload;
    delete webPreferences.preloadURL;

    // Disable Node.js integration
    webPreferences.nodeIntegration = false;
  });

  // https://electronjs.org/docs/tutorial/security#13-disable-or-limit-creation-of-new-windows
  contents.on("new-window", (contentsEvent, navigationUrl) => {
    // Log and prevent opening up a new window

    log.error(
      `The application tried to open a new window at the following address: '${navigationUrl}'. This attempt was blocked.`
    );
    contentsEvent.preventDefault();
  });
});

// Filter loading any module via remote;
// you shouldn't be using remote at all, though
// https://electronjs.org/docs/tutorial/security#16-filter-the-remote-module
app.on("remote-require", (event) => {
  event.preventDefault();
});

// built-ins are modules such as "app"
app.on("remote-get-builtin", (event) => {
  event.preventDefault();
});

app.on("remote-get-global", (event) => {
  event.preventDefault();
});

app.on("remote-get-current-window", (event) => {
  event.preventDefault();
});

app.on("remote-get-current-web-contents", (event) => {
  event.preventDefault();
});
