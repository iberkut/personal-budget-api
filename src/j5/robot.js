// in rpi_zero -> /dev/ttyACM0

var five = require("johnny-five");
let motors;
const standartSpeed = 100;

function initBoard() {
    var board = new five.Board();

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

        this.repl.inject({
            motors
        });

    });
}


function stop() {
    motors.stop();
}
function fwd(speed = standartSpeed) {
    motors.fwd(speed);
}
function rev(speed = standartSpeed) {
    motors.fwd(speed);
}
function rotateLeft(speed = standartSpeed, time = 0) {
    motors[0].fwd(speed);
    motors[1].rev(speed);
    time && board.wait(time, () => {
        stop();
    })
}
function rotateRight({ speed = standartSpeed, time = 0 } = {}) {
    motors[0].fwd(speed);
    motors[1].rev(speed);
    time &&  board.wait(time, () => {
        stop();
    })
}
function left() {
    stop();
    rotateLeft( { time: 50 } )
}
function right() {
    stop();
    rotateRight({ time: 50 })
}

export default {
    initBoard,
    fwd,
    rev,
    stop,
    left,
    right,
    rotateLeft,
    rotateRight
};
