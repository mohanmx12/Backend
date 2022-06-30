const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080
let visitas = 0

app.get("/", (request, response) => {
    response.send("<h1 style=`color: blue;`>Bienvenidos a mi Space</h1>")
} )

app.get("/todos", (request, response) => {
    response.send({mensaje: "saludos a todos"})
})

app.get("/tutores", (request, response) => {
    response.send({mensaje: "saludos a todos los tutores"})
})

app.get("/hora", (req, res) => res.send(new Date().toLocaleDateString()))

app.get("/visita", (req, res) => {
    visitas++
    res.send(`Se ha visitado este sitio ${visitas} veces`)
})

const server = app.listen(PORT, () => {
    console.log(`server listening [${PORT}]..."}`);
})
server.on("error", e => console.log(`error on server.`, e))