
const robotAction = require('./robot-action/robot-action.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(robotAction);
};
