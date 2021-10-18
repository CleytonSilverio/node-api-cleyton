const express = require('express');
const cors = require('cors')
const config = require('./config.json');
const app = express();
const logger = require('./logger');
app.use(express.json(), cors());

var port = config.port;

app.listen(port, () => {
    logger.log('info', `Aplicação iniciada na porta: ${port}`);
})