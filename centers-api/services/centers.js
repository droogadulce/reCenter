const MongoLib = require('../lib/mongo');

class CentersService {
  constructor() {
    this.collection = 'centers';
    this.mongoDB = new MongoLib();
  }

  async getCenters({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const centers = await this.mongoDB.getAll(this.collection, query);
    return centers || [];
  }

  async getCenter({ centerId }) {
    const center = await this.mongoDB.get(this.collection, centerId);
    return center || {};
  }

  async createCenter({ center }) {
    const createdCenterId = await this.mongoDB.create(this.collection, center);
    return createdCenterId;
  }

  async updateCenter({ centerId, center } = {}) {
    const updatedCenterId = await this.mongoDB.update(
      this.collection,
      centerId,
      center
    );
    return updatedCenterId;
  }

  async deleteCenter({ centerId }) {
    const deletedCenterId = await this.mongoDB.delete(
      this.collection,
      centerId
    );
    return deletedCenterId;
  }
}

module.exports = CentersService;
