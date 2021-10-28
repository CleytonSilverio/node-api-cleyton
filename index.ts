import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index';
import conexão from './conexao';

dotenv.config();
const app = express();
const port = process.env.PORT;


app.use(express.json(), cors(), router);

conexão;

app.listen(port, () => {
    console.log(`API iniciada na porta ${port}`);
});
