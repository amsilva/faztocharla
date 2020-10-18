//create a server object:
//http
//  .createServer(function (req, res) {
//    res.write("Hello World 2!"); //write a response to the client
//    res.end(); //end the response
//  })
//  .listen(8080); //the server object listens on port 8080

const express = require("express");
const http = require("http");
const sktio = require("socket.io");

const app = express();
const server = http.createServer(app);
//const io = sktio.listen(server);
const mio = sktio.listen(server);

mio.on("connection", (socket) => {
  console.log("nova inscricao");
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("(server logjs) pronto 3, na porta 3000");
});

/**
 * funcao logando mensagenns de controle
 */
function logando() {
  console.log("(server logjs) pronto 3, na porta 3000");
}
