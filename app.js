const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    const evento = {
        nome: 'Copa do Mundo 2026 - Evento PaaS',
        local: 'São Paulo - Brasil',
        data: '15 de Julho de 2026',
        horario: '19:00',
        descricao:
            'Evento promovido em plataforma PaaS para integração de seleções da Copa do Mundo 2026.',
        cadastro:
            'http://localhost:8080'
    }

    res.render('index', { evento })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})