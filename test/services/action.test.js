const assert = require('assert');
const app = require('../../src/app');

describe('\'action\' service', () => {
  it('registered the service', () => {
    const service = app.service('action');

    assert.ok(service, 'Registered the service');
  });
});
