
const robotAction = require('./robot-action/robot-action.service.js');
const stateChange = require('./state-change/state-change.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(robotAction);
  app.configure(stateChange);
};
