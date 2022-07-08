// associar as dependências instaladas
const express = require('express');
// inicializar app express
const app = express();
// inicializar mongoose
const mongoose = require("mongoose");
// define a porta para 5000
let port = 5000;

// servidor à escuta na porta 5000
app.listen(port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});

app.use(express.static(__dirname));

// "Página de Registro’
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// "Página de Registro’
app.get("/login", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

// "Página de Registro’
app.get("/signup", function(req, res) {
    res.sendFile(__dirname + "/signUp.html");
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
// este middleware deve estar acima das routes-handlers!

// todo o url começado por "/’ chama as rotas em "./routes/api’
const routes = require("./routes/api");
app.use("/", routes);

// Ligar á B.D.: 'mariadmaced'->user da BD, ´nnn´->pass
  mongoose.connect("mongodb+srv://mariadmaced:nnn@nodejscluster.cwhlhdk.mongodb.net/?retryWrites=true&w=majority");

  // Confirma ligação no console
mongoose.connection.on("connected", function () {
  console.log("Connected to Database "+"test");
});

// Mensagem de Erro
mongoose.connection.on("error", (err) => {
  console.log("Database error "+err);
});
