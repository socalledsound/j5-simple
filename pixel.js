vr pixel = require("node-pixel");
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
	  io: new Raspi()
});
var strip = null;


board.on("ready", function() {


    strip = new pixel.Strip({
	            board: this,
	            controller: "FIRMATA",
	            strips: [ {pin: 1, length: 4}, ], // this is preferred form for definition
	            gamma: 2.8, // set to a gamma that works nicely for WS2812
	        });

	    strip.on("ready", function() {
		            // do stuff with the strip here.
		         });
});







//var led = new five.Led("P1-12");

 // led.pulse();
	
	  //   this.wait(10000, function() {
            //    led.stop().off();
            //  });
 //  });
