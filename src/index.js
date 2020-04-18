const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

require('./../controllers/filmesController')(app);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
