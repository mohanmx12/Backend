const http = require("http")

const server = http.createServer( (peticion, respuesta) => {
  const now = new Date()  

  let mensaje = "buenas noches"
  if (now.getHours() >= 6 && now.getHours() <= 12) mensaje = "buenos dias"
  else if (now.getHours() > 12 && now.getHours() <= 19) mensaje = "buenas tardes"



respuesta.end("Saludos para milan")   
} )

const connectedServer = server.listen(8080, () => {
    console.log("Server running...");
})