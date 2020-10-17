var http = require("http");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("(server logjs) pronto 1, na porta 3000");
});

/**
 * funcao logando mensagenns de controle
 */
function logando() {
  console.log("(server logjs) pronto 2, na porta 3000");
}

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
