const joi = require('@hapi/joi');

const centerIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const centerNameSchema = joi.string().max(140);
const centerDescriptionSchema = joi.string();

const createCenterSchema = {
  name: centerNameSchema.required(),
  description: centerDescriptionSchema.required()
};

const updateCenterSchema = {
  name: centerNameSchema,
  description: centerDescriptionSchema
};

module.exports = {
  centerIdSchema,
  createCenterSchema,
  updateCenterSchema
};
