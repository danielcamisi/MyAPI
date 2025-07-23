const express = require('express');
const servController = require('../controller/servController');
const { validateFeedback } = require('../middlewares/servMiddlewares');

const router = express.Router();

// GET /feedbacks - listar todos os feedbacks
router.get('/', servController.getAll);

// POST /feedbacks - criar novo feedback
router.post('/', validateFeedback, servController.create);

module.exports = router;
