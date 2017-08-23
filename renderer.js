// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

/*const electron_auto_updater = require('electron-auto-updater');


electron_auto_updater.autoUpdater.addListener("update-available", function (event) {
    console.log("A new update is available");
    alert("A new update is available");
});
electron_auto_updater.autoUpdater.addListener("update-downloaded", function (event, releaseNotes, releaseName, releaseDate, updateURL) {
    console.log("A new update is ready to install", "Version " + releaseName + " is downloaded and will be automatically installed on Quit");
    console.log("quitAndInstall");
    electron_auto_updater.autoUpdater.quitAndInstall();
    return true;
});

electron_auto_updater.autoUpdater.addListener("error", function (error) {
    console.log(error);
    alert("error " + error);
});
electron_auto_updater.autoUpdater.addListener("checking-for-update", function (event) {
    console.log("checking-for-update");
    alert("checking-for-update");
});
electron_auto_updater.autoUpdater.addListener("update-not-available", function () {
    console.log("update-not-available");
    alert("A new update is not available");
});

electron_auto_updater.autoUpdater.checkForUpdates();
*/