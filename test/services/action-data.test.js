const assert = require('assert');
const app = require('../../src/app');

describe('\'action-data\' service', () => {
  it('registered the service', () => {
    const service = app.service('action-data');

    assert.ok(service, 'Registered the service');
  });
});
