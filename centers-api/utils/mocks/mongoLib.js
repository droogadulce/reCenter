// eslint-disable-next-line import/no-extraneous-dependencies
const sinon = require('sinon');

const { centersMock, filteredCentersMock } = require('./centers');

const getAllStub = sinon.stub();
getAllStub.withArgs('centers').resolves(centersMock);

const garbageTypesQuery = { garbageTypes: { $in: ['papel'] } };
getAllStub
  .withArgs('centers', garbageTypesQuery)
  .resolves(filteredCentersMock['papel']);

const createStub = sinon.stub().resolves(centersMock[0].id);

class MongoLibMock {
  // eslint-disable-next-line class-methods-use-this
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  // eslint-disable-next-line class-methods-use-this
  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock
};
