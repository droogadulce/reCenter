/* eslint-disable class-methods-use-this */
const { centersMock } = require('../utils/mocks/centers');

class CentersService {
  async getCenters() {
    const centers = await Promise.resolve(centersMock);
    return centers || [];
  }

  async getCenter() {
    const center = await Promise.resolve(centersMock[0]);
    return center || {};
  }

  async createCenter() {
    const createdCenterId = await Promise.resolve(centersMock[0].id);
    return createdCenterId;
  }

  async updateCenter() {
    const updatedCenterId = await Promise.resolve(centersMock[0].id);
    return updatedCenterId;
  }

  async deleteCenter() {
    const deletedCenterId = await Promise.resolve(centersMock[0].id);
    return deletedCenterId;
  }
}

module.exports = CentersService;
