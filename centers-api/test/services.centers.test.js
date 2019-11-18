const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { centersMock } = require('../utils/mocks/centers');

describe('services - centers', function() {
  const CentersServices = proxyquire('../services/centers', {
    '../lib/mongo': MongoLibMock
  });

  const centersService = new CentersServices();

  describe('when getCenters method is called', async function() {
    it('should call the getAll MongoLib method', async function() {
      await centersService.getCenters({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of movies', async function() {
      const result = await centersService.getCenters({});
      const expected = centersMock;
      assert.deepEqual(result, expected);
    });
  });
});
