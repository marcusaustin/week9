var pin = process.argv[2]*1;
var wpi = require('wiring-pi');
//console.log ('wpi',wpi);
wpi.setup('gpio');
wpi.pinMode(pin,wpi.OUTPUT);
var value = 1;
function toggleBulb(){
	wpi.digitalWrite(pin,value);
	console.log('pin',pin,'value',value);
	value =  +!value;
}
setInterval(toggleBulb, 90);