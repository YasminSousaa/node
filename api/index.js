const express = require("express")
const path = require("path")

const app = express()

// configura EJS
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))

app.get("/", (req, res) => {

    const evento = {
        nome: "Copa do Mundo 2026 - Evento PaaS",
        local: "São Paulo - Brasil",
        data: "15 de Julho de 2026",
        horario: "19:00",
        descricao: "Evento de integração das seleções na plataforma PaaS",
        cadastro: "https://flask-python1.vercel.app/"
    }

    res.render("index", { evento })
})

// IMPORTANTE: export para Vercel
module.exports = app