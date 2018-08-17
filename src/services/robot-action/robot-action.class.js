/* eslint-disable no-unused-vars */
const robot = require('../../helpers/j5-helper.js');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    const {
      fwd,
      rev,
      stop,
      left,
      right,
      rotateLeft,
      rotateRight
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
    
    return params.query;
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
