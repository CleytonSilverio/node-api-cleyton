const express = require('express');
const cors = require('cors')
const config = require('./config.json');
const app = express();
app.use(express.json(), cors());

var port = config.port;

app.listen(port, () => {
    console.log("Aplicação iniciada!")
})