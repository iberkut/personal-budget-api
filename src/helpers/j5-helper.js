// in rpi_zero -> /dev/ttyACM0
const five = require('johnny-five')
let motors
const standardSpeed = 140
let board

const fakeMotors = {
  stop() {
    console.log('fake motors => stop')
  },
  rev() {
    console.log('fake motors => rev')
  },
  fwd() {
    console.log('fake motors => fwd')
  },
  fake(action) {
    console.log(`fake motors => ${action}`)
    return true
  }
}

const tryMotors = motors => {
  return motors || fakeMotors
}

const initBoard = () => {
  board = new five.Board()

  board.on('ready', function () {

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
    }])

    return this.repl.inject({
      motors,
      robot
    })

  })
}

const stop = () => {
  tryMotors(motors).stop()
}

// use reverse direction
const rev = (speed = standardSpeed) => {
  tryMotors(motors).fwd(speed)
}

const fwd = (speed = standardSpeed) => {
  tryMotors(motors).rev(speed)
}

const rotateLeft = ({ speed = standardSpeed, time = 0 } = {}) => {
  motors[1].fwd(speed)
  motors[0].rev(speed)
  time && board.wait(time, () => {
    stop()
  })
}

const rotateRight = ({ speed = standardSpeed, time = 0 } = {}) => {
  motors[0].fwd(speed)
  motors[1].rev(speed)
  time && board.wait(time, () => {
    stop()
  })
}

const left = () => {
  stop()
  rotateLeft({ speed: 200, time: 200 })
}

const right = () => {
  stop()
  rotateRight({ speed: 200, time: 200 })
}

const robot = {
  initBoard,
  fwd,
  rev,
  stop,
  left,
  right,
  rotateLeft,
  rotateRight
}

module.exports = robot
