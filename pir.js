var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
  //	var ledGreen = new five.Led("P1-13");
	var ledRed = new five.Led("GPIO16");
	var motion  = new five.Motion("GPIO5");

//	board.repl.inject({
//		motion : motion
//	});


	motion.on('motionstart', function(){
		console.log("motion!");
		ledRed.on();
	})

	motion.on('motionend', function(){
		console.log('no motion');
		ledRed.off();
	})

	
	
	

});
