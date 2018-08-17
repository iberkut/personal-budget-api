const assert = require('assert');
const app = require('../../src/app');

describe('\'robot-action\' service', () => {
  it('registered the service', () => {
    const service = app.service('robot-action');

    assert.ok(service, 'Registered the service');
  });
});
