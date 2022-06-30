const express = require("express")

const app = express()
const PORT = process.env.PORT || 8080
let visitas = 0

app.get("/productos", (request, response) => {
    response.send([
        {
          "title": "Escuadra",
          "price": 123.45,
          "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
          "id": 1
        },
        {
          "title": "Calculadora",
          "price": 234.56,
          "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
          "id": 2
        },
        {
          "title": "Globo Terráqueo",
          "price": 345.67,
          "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
          "id": 3
        }
       ]
       )
} 
)

app.get("/productoRandom", (request, response) => {
    response.send([{
        "title": "Globo Terráqueo",
        "price": 345.67,
        "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
        "id": 3
      }])
} )



const server = app.listen(PORT, () => {
    console.log(`server listening [${PORT}]..."}`);
})
server.on("error", e => console.log(`error on server.`, e))