/// <reference path="typings/tsd.d.ts" />

const electron = require("electron");
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
var client:any = null;
const windowStateKeeper = require('electron-window-state');

console.log(process.env.NODE_ENV)
if( process.env.NODE_ENV === 'production' ){
  client = require('electron-connect').client;
}

// Report crashes to our server.
electron.crashReporter.start();

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow:any = null;

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != "darwin") {
    app.quit();
    console.log("other");
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", function() {
  // Create the browser window.

  let mainWindowState = windowStateKeeper({
    defaultWidth: 960,
    defaultHeight: 800
  });

  var mainWindow = new BrowserWindow({
    x:mainWindowState.x,
    y:mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height
  });

  // and load the index.html of the app.
  mainWindow.loadURL("file://" + __dirname + "/src/desktop.html");

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  // Connect to server process
  if( client ) {
    client.create(mainWindow);
  }
  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});