var pixel = require("node-pixel");
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
	  io: new Raspi()
});
board.on("ready", function() {
var led = new five.Led("P1-12");

 led.pulse();
	
   this.wait(10000, function() {
             led.stop().off();
              });
   });
