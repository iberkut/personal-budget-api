const assert = require('assert');
const app = require('../../src/app');

describe('\'state-change\' service', () => {
  it('registered the service', () => {
    const service = app.service('state-change');

    assert.ok(service, 'Registered the service');
  });
});
