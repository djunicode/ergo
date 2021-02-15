/**
 * exports.functionToSendData = require("./sendingData").sendData;
 * Now inside sendingData.js
 * const { ipcRenderer } = require('electron');
 * exports.getCollege = () => ipcRenderer.once('college',
 * (event,data) => console.log(data));
 * exports.sendHello = data => ipcRenderer.send("hello", data);
 */
