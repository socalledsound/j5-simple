var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var ledGreen = new five.Led("GPIO20");
  var ledRed = new five.Led("GPIO16");
// this is the same thing as ("GPIO16");	
	ledGreen.on();
	ledRed.blink();
	///ledRed.on();

})
