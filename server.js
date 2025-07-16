const express = require("express");
const mongoose = require('mongoose');
const feed = require("./models/models");
const feedRoutes = require("./routes/servRoutes");
const app = express();
const PORT = 3000;
const cors = require("cors");
require("./config/db");

//Middleware - fala para o express que estamos trabalhando com o JSON
app.use(express.json());
app.use(cors());
app.use("/feedbacks", feedRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo a API!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});