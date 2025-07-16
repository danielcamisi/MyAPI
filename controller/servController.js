const feed = require("../models/models")

exports.create = async (req, res) => {
  const { nameProject } = req.body;
  const { WhoSendFeedback } = req.body;
  const { desc } = req.body;
  if (!nameProject || !desc) {
    return res.status(400).json({ erro: "preenchda todos os campos" });
  }
  try {
    const newFeedback = new feed({ nameProject, WhoSendFeedback, desc});

    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir a tarefa" });
  }
};
