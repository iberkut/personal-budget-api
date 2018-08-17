// in rpi_zero -> /dev/ttyACM0

var five = require("johnny-five");
let motors;
const standartSpeed = 140;
let board;

const robot = {
  initBoard,
  fwd,
  rev,
  stop,
  left,
  right,
  rotateLeft,
  rotateRight
};

function initBoard() {
  board = new five.Board();

  board.on("ready", function () {

    motors = new five.Motors([{
      pins: {
        pwm: 9,
        dir: 7
      }
    }, {
      pins: {
        pwm: 10,
        dir: 8
      }
    }]);

    return this.repl.inject({
      motors,
      robot
    });

  });
}


function stop() {
  motors.stop();
}
// use reverce direction
function fwd(speed = standartSpeed) {
  motors.rev(speed);
}
function rev(speed = standartSpeed) {
  motors.fwd(speed);
}
function rotateLeft({ speed = standartSpeed, time = 0 } = {}) {
  motors[0].fwd(speed);
  motors[1].rev(speed);
  time && board.wait(time, () => {
    stop();
  })
}
function rotateRight({ speed = standartSpeed, time = 0 } = {}) {
  motors[1].fwd(speed);
  motors[0].rev(speed);
  time && board.wait(time, () => {
    stop();
  })
}
function left() {
  stop();
  rotateLeft({ time: 100 })
}
function right() {
  stop();
  rotateRight({ time: 100 })
}

module.exports = robot;
// robot.stop()