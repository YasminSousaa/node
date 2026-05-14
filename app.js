const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const evento = {
        nome: 'Copa do Mundo 2026 - Evento PaaS',
        local: 'São Paulo - Brasil',
        data: '15 de Julho de 2026',
        horario: '19:00',
        descricao: 'Evento em plataforma PaaS para integração de seleções.',
        cadastro: 'https://SEU-FLASK-URL.onrender.com'
    }

    res.render('index', { evento })
})

// 🔴 IMPORTANTE: exporta o app
module.exports = app