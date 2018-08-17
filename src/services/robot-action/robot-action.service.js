// Initializes the `robot-action` service on path `/robot-action`
const createService = require('./robot-action.class.js');
const hooks = require('./robot-action.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/robot-action', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('robot-action');

  service.hooks(hooks);
};
