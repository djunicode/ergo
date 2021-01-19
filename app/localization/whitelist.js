// Contains a whitelist of languages for our app
const whitelistMap = {
  en: "English",
};

var Whitelist = (function () {
  let keys = Object.keys(whitelistMap);
  let clickFunction = function (channel, lng) {
    return function (menuItem, browserWindow, event) {
      browserWindow.webContents.send(channel, {
        lng,
      });
    };
  };

  return {
    langs: keys,
    buildSubmenu: function (channel) {
      let submenu = [];

      for (var i = 0; i < keys.length; i++) {
        submenu.push({
          label: whitelistMap[keys[i]],
          click: clickFunction(channel, keys[i]),
        });
      }

      return submenu;
    },
  };
})();

module.exports = Whitelist;
