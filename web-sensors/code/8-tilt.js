// code: http://johnny-five.io/examples/switch-tilt-SW_200D/
// hardware wiring: http://johnny-five.io/examples/switch-tilt-SW_200D/
// longer pin to the 5V and shorter pin to GND via a resistor

var five = require('johnny-five')
var board = new five.Board()
var tilt

board.on('ready', function() {
  tilt = new five.Button(2) // digital pin 2

  board.repl.inject({
    button: tilt
  })

  // tilt the breadboard towards to the ground pin
  tilt.on('down', function() {
    console.log('down')
  })

  // tilt and hold
  tilt.on('hold', function() {
    console.log('hold')
  })

  // tilt back the breadboard to the stable position
  tilt.on('up', function() {
    console.log('up')
  })
})
