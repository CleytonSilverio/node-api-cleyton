import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mdb = process.env.DB_STR || '';

const connect = mongoose.connect(mdb, (err) => {
    if (err) {
        console.log('Banco de dados falhou a conexão: ', err);
    } else {
        console.log('Conectado com sucesso ao banco de dados.');
    }
});

export default connect;