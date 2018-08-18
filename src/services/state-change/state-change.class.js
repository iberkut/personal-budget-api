/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup(app){
    this.app = app;
  }

  async create (data) {
    return data;
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
