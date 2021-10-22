import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/index';

dotenv.config();
const app = express();
const port = process.env.PORT;
const mdb = process.env.DB_STR || '';

app.use(express.json(), cors(), router);

mongoose.connect(mdb, (err) => {
    if (err) {
        console.log('Banco de dados falhou a conexão: ', err);
    } else {
        console.log('Conectado com sucesso ao banco de dados.');
    }
});

app.listen(port, () => {
    console.log(`API iniciada na porta ${port}`);
});
