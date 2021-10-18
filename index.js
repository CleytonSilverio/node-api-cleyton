const express = require('express');
const app = express();
const config = require('./config.json');
app.use(express.json());

var port = config.port;

app.listen(port, () => {
    console.log("Aplicação iniciada!")
})