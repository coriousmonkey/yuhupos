var exec = require('cordova/exec');

var FDPrinter = {
   list: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothService", "list", []);
   },
   connect: function(fnSuccess, fnError, name){
      exec(fnSuccess, fnError, "BluetoothService", "connect", [name]);
   },
   stop: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothService", "stop", []);
   },
   state: function(fnSuccess, fnError){
     exec(fnSuccess, fnError, "BluetoothService", "getState", []);
   },
   commandTest: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "Main_Activity", "CommandTest", [str]);
   },
   printTest: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "Main_Activity", "Print_Test", [str]);
   },
   BluetoothPrintTest: function(fnSuccess, fnError, str){
      exec(fnSuccess, fnError, "Main_Activity", "BluetoothPrintTest", []);
   }
};

module.exports = FDPrinter;
