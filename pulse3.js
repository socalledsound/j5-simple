var pixel = require("node-pixel");
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
	  io: new Raspi()
});
board.on("ready", function() {
var led_blue = new five.Led("P1-12");
var led_red = new five.Led("P1-11");
var led_green = new five.Led("P1-35");

led_blue.pulse();
led_red.blink();
led_green.pulse();

   this.wait(10000, function() {
             led_blue.stop().off();
             led_green.stop().off();
   })    
         
   this.wait(15000, function() {
             led_red.stop().off(); 
   
   	});
   });
