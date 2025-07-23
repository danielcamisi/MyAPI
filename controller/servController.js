const feed = require('../models/models');

// Criar novo feedback
exports.create = async (req, res, next) => {
  try {
    const newFeedback = new feed(req.body);
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    next(error);
  }
};

// Listar todos os feedbacks
exports.getAll = async (req, res, next) => {
  try {
    const feedbacks = await feed.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    next(error);
  }
};
