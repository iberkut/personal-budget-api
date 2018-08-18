// Initializes the `state-change` service on path `/state-change`
const createService = require('./state-change.class.js');
const hooks = require('./state-change.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/state-change', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('state-change');

  service.hooks(hooks);
};
