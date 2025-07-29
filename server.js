const express = require('express');
const mongoose = require('mongoose');
const feed = require('./models/models');
const feedRoutes = require('./routes/servRoutes');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
require('./config/db');
const { errorHandler } = require('./middlewares/servMiddlewares');

//Middleware - fala para o express que estamos trabalhando com o JSON
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: false,
    methods: ['POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/feedbacks', feedRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).send('Bem vindo a API!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
