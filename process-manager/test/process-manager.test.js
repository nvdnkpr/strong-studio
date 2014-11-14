var processManager = require('../server');
var request = require('supertest');

describe('process-manager-proxy', function() {
  it('should proxy requests to the underlying process-manager', function(done) {
    request(processManager)
      .get('/')
      .set('accept', 'application/json')
      .expect(200)
      .end(function(err) {
        done();
      });
  });
});
