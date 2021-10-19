require('express-async-errors');
const express = require('express');
const cors = require('cors')
const config = require('./config.json');
const app = express();
const logger = require('./logger');
const moment = require('moment');
require('moment/locale/pt-br');
var validate = require('uuid-validate');
app.use(express.json(), cors());

var port = config.port;

app.get('/erro', (req, res, next) => {
    throw new Error();
});

var hora = moment().format('LLL');

app.get('/', (req, res) => {
    if (validate(req.headers.uuid)) {
        res.status(200).json({
            message: 'funcionando perfeitamente!',
        })
    }else{
        throw new Error();
    }

});

app.use((error, req, res, next) => {
    logger.log('error', `Erro generico tratado dia: ${hora}`);
    res.status(400).json({
        message: `Erro, necessário o UUID da operação no header`,
    })
    return;
});

app.listen(port, () => {
    logger.log('info', `Aplicação iniciada na porta: ${port}`);
});