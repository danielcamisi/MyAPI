const { feedbackSchema } = require('../validations/servValidations');

// Middleware para validar o corpo da requisição ao criar feedback
function validateFeedback(req, res, next) {
  const { error } = feedbackSchema.validate(req.body);
  if (error) {
    error.isJoi = true;
    return next(error);
  }
  next();
}

// Middleware de tratamento de erros centralizado
function errorHandler(err, req, res, next) {
  if (err.isJoi) {
    return res.status(400).json({ erro: err.details[0].message });
  }
  console.error(err.stack);
  res.status(500).json({ erro: 'Erro interno do servidor' });
}

module.exports = { validateFeedback, errorHandler };
