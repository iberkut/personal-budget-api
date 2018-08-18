/* eslint-disable no-unused-vars */
const robot = require('../../helpers/j5-helper.js');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app){
    this.app = app;
  }

  async find (params) {
    const {
      fwd,
      rev,
      stop,
      left,
      right,
      rotateLeft,
      rotateRight,
      game,
      session = false
    } = params.query || {};

    if (fwd) {
      robot.fwd();
    } else if (rev) {
      robot.rev();
    }else if (stop) {
      robot.stop();
    }else if (left) {
      robot.left();
    }else if (right) {
      robot.right();
    }else if (rotateLeft) {
      robot.rotateLeft();
    }else if (rotateRight) {
      robot.rotateRight();
    }

    const stateChangeService = this.app.service('state-change')

    await stateChangeService.create({
      session,
      action: game ? 'game' : 'move'
    })
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
