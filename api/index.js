const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {

    const evento = {
        nome: 'Copa do Mundo 2026 - Evento PaaS',
        local: 'São Paulo - Brasil',
        data: '15 de Julho de 2026',
        horario: '19:00',
        descricao: 'Evento em PaaS com integração de seleções',
        cadastro: 'https://SEU-FLASK.onrender.com'
    }

    res.render('index', { evento })
})

module.exports = app