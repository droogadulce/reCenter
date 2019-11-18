const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  centersMock,
  CentersServiceMock
} = require('../utils/mocks/centers.js');
const testServer = require('../utils/testServer');

describe('routes - centers', function() {
  const route = proxyquire('../routes/centers', {
    '../services/centers': CentersServiceMock
  });
  const request = testServer(route);

  describe('GET /centers', function() {
    it('should response with status 200', function(done) {
      request.get('/api/centers').expect(200, done);
    });

    it('should respond with the list of centers', function(done) {
      // eslint-disable-next-line handle-callback-err
      request.get('/api/centers').end((err, res) => {
        assert.deepEqual(res.body, {
          data: centersMock,
          message: 'centers listed'
        });
        done();
      });
    });
  });
});
