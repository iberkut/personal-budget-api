// in rpi_zero -> /dev/ttyACM0

var five = require("johnny-five");
let motors;
const standartSpeed = 100;

function Robot() {
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

        return this.repl.inject({
            motors
        });

    });
}


Robot.prototype.stop = function() {
    motors.stop();
}
Robot.prototype.fwd = function(speed = standartSpeed) {
    motors.fwd(speed);
}
Robot.prototype.rev = function(speed = standartSpeed) {
    motors.fwd(speed);
}
Robot.prototype.rotateLeft = function(speed = standartSpeed, time = 0) {
    motors[0].fwd(speed);
    motors[1].rev(speed);
    time && board.wait(time, () => {
        stop();
    })
}
Robot.prototype.rotateRight = function({ speed = standartSpeed, time = 0 } = {}) {
    motors[0].fwd(speed);
    motors[1].rev(speed);
    time &&  board.wait(time, () => {
        stop();
    })
}
Robot.prototype.left = function() {
    stop();
    rotateLeft( { time: 50 } )
}
Robot.prototype.right = function() {
    stop();
    rotateRight({ time: 50 })
}

export default Robot;
