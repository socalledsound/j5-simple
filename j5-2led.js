var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  var ledGreen = new five.Led("P1-13");
  var ledRed = new five.Led("P1-36");



	ledGreen.blink();

  	setTimeout(function() {

		ledGreen.stop().off();
  	},5000);  


	setInterval(function() {
		ledRed.blink();
		setTimeout(function() {
			ledRed.stop().off();
		},1000);
	},2000);	


});
