const Joi = require('joi');

const feedbackSchema = Joi.object({
  nameProject: Joi.string().trim().required().messages({
    'string.empty': 'O nome do projeto é obrigatório',
  }),
  WhoSendFeedback: Joi.string().trim().allow(null, '').optional(),
  desc: Joi.string().trim().required().messages({
    'string.empty': 'A descrição é obrigatória',
  }),
});

module.exports = { feedbackSchema };
