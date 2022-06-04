const express = require('express');
const app = express();
const carros = require("./src/carros/carros.json")

app.get('/carros', (request, response) => {
    return response.json(carros);
})

app.listen(3333)