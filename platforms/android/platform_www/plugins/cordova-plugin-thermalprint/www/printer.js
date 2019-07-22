cordova.define("cordova-plugin-thermalprint.Thermalprint", function(require, exports, module) {
var exec = require('cordova/exec');

var printer = {
  platforms: ['android'],

  isSupported: function() {
    if (window.device) {
      var platform = window.device.platform;
      if ((platform !== undefined) && (platform !== null)) {
        return (this.platforms.indexOf(platform.toLowerCase()) >= 0);
      }
    }
    return false;
  },

  listBluetoothDevices: function(onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'listBluetoothDevices', []);
  },
  connect: function(address, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'connect', [address]);
  },
  disconnect: function(onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'disconnect', []);
  },
  feedPaper: function(lines, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'feedPaper', [lines]);
  },
  printText: function(text, charset, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printText', [text, charset]);
  },
  printSelfTest: function (onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printSelfTest', []);
  },
  getStatus: function (onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'getStatus', []);
  },
  getTemperature: function (onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'getTemperature', []);
  },
  setBarcode: function (align, small, scale, hri, height, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'setBarcode', [align, small, scale, hri, height]);
  },
  printBarcode: function (type, data, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printBarcode', [type, data]);
  },
  printQRCode: function(size, eccLv, data, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printQRCode', [size, eccLv, data]);
  },
  printImage: function (image, width, height, align, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printImage', [image, width, height, align]);
  },
  drawPageRectangle: function (x, y, width, height, fillMode, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'drawPageRectangle', [x, y, width, height, fillMode]);
  },
  drawPageFrame: function (x, y, width, height, fillMode, thickness, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'drawPageFrame', [x, y, width, height, fillMode, thickness]);
  },
  selectPageMode: function (onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'selectPageMode', []);
  },
  selectStandardMode: function (onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'selectStandardMode', []);
  },
  setPageRegion: function (x, y, width, height, direction, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'setPageRegion', [x, y, width, height, direction]);
  },
  printPage: function (onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printPage', []);
  },
  write: function (bytes, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'write', [bytes]);
  },
  writeHex: function (hex, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'writeHex', [hex]);
  },
  connectWifi: function (ip, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'connectPrinter', [ip]);
  },
  cutpaper: function (ip, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'cutpaper', [ip]);
  },
  printWifi: function (data, onSuccess, onError) {
    exec(onSuccess, onError, 'Thermalprint', 'printWifi', [data]);
  }
};
module.exports = printer;

});
