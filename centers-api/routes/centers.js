const express = require('express');
const { centersMock } = require('../utils/mocks/centers');

function centersApi(app) {
  const router = express.Router();
  app.use('/api/centers', router);

  router.get('/', async function(req, res, next) {
    try {
      const centers = await Promise.resolve(centersMock);
      res.status(200).json({
        data: centers,
        message: 'centers listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:centerId', async function(req, res, next) {
    try {
      const center = await Promise.resolve(centersMock[0]);
      res.status(200).json({
        data: center,
        message: 'center retrieved'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next) {
    try {
      const createdCenterId = await Promise.resolve(centersMock[0].id);
      res.status(201).json({
        data: createdCenterId,
        message: 'center created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:centerId', async function(req, res, next) {
    try {
      const updatedCenterId = await Promise.resolve(centersMock[0].id);
      res.status(200).json({
        data: updatedCenterId,
        message: 'center updated'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:centerId', async function(req, res, next) {
    try {
      const deletedCenterId = await Promise.resolve(centersMock[0].id);
      res.status(200).json({
        data: deletedCenterId,
        message: 'center deleted'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = centersApi;
