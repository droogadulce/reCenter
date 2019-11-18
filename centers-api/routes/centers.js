const express = require('express');
const CentersService = require('../services/centers');

const {
  centerIdSchema,
  createCenterSchema,
  updateCenterSchema
} = require('../utils/schemas/centers');

const validationHandler = require('../utils/middleware/validationHandler');

function centersApi(app) {
  const router = express.Router();
  app.use('/api/centers', router);

  const centersService = new CentersService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const centers = await centersService.getCenters({ tags });
      res.status(200).json({
        data: centers,
        message: 'centers listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:centerId',
    validationHandler({ centerId: centerIdSchema }, 'params'),
    async function(req, res, next) {
      const { centerId } = req.params;
      try {
        const center = await centersService.getCenter({ centerId });
        res.status(200).json({
          data: center,
          message: 'center retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post('/', validationHandler(createCenterSchema), async function(
    req,
    res,
    next
  ) {
    const { body: center } = req;
    try {
      const createdCenterId = await centersService.createCenter({ center });
      res.status(201).json({
        data: createdCenterId,
        message: 'center created'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put(
    '/:centerId',
    validationHandler({ centerId: centerIdSchema }, 'params'),
    validationHandler(updateCenterSchema),
    async function(req, res, next) {
      const { centerId } = req.params;
      const { body: center } = req;
      try {
        const updatedCenterId = await centersService.updateCenter({
          centerId,
          center
        });
        res.status(200).json({
          data: updatedCenterId,
          message: 'center updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:centerId',
    validationHandler({ centerId: centerIdSchema }, 'params'),
    async function(req, res, next) {
      const { centerId } = req.params;
      try {
        const deletedCenterId = await centersService.deleteCenter({ centerId });
        res.status(200).json({
          data: deletedCenterId,
          message: 'center deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = centersApi;
