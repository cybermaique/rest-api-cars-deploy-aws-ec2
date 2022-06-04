const express = require('express');

const app = express();

app.get('/atualizou', (request, response) => {
    return response.json({message: 'Atualizou hehehe!'});
})

app.get('/', (request, response) => {
    return response.json({message: 'Server está rodando!!!'});
})

app.listen(3333)