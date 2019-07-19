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
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-bluetooth-serial": "0.4.7",
  "cordova-plugin-networking-bluetooth": "1.0.3"
};
// BOTTOM OF METADATA
});