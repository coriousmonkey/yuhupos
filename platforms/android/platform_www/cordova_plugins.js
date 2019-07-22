cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
    "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
    "pluginId": "cordova-plugin-bluetooth-serial",
    "clobbers": [
      "window.bluetoothSerial"
    ]
  },
  {
    "id": "cordova-plugin-networking-bluetooth.CDVNetEvent",
    "file": "plugins/cordova-plugin-networking-bluetooth/www/CDVNetEvent.js",
    "pluginId": "cordova-plugin-networking-bluetooth"
  },
  {
    "id": "cordova-plugin-networking-bluetooth.NetworkingBluetooth",
    "file": "plugins/cordova-plugin-networking-bluetooth/www/NetworkingBluetooth.js",
    "pluginId": "cordova-plugin-networking-bluetooth",
    "clobbers": [
      "networking.bluetooth"
    ]
  },
  {
    "id": "cordova-plugin-bluetooth-zbtprinter.ZebraBluetoothPrinter",
    "file": "plugins/cordova-plugin-bluetooth-zbtprinter/www/zbtprinter.js",
    "pluginId": "cordova-plugin-bluetooth-zbtprinter",
    "clobbers": [
      "cordova.plugins.zbtprinter"
    ]
  },
  {
    "id": "cordova-plugin-thermalprint.Thermalprint",
    "file": "plugins/cordova-plugin-thermalprint/www/printer.js",
    "pluginId": "cordova-plugin-thermalprint",
    "clobbers": [
      "Thermalprint"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-bluetooth-serial": "0.4.7",
  "cordova-plugin-networking-bluetooth": "1.0.3",
  "cordova-plugin-bluetooth-zbtprinter": "1.0",
  "cordova-plugin-thermalprint": "1.3.8"
};
// BOTTOM OF METADATA
});