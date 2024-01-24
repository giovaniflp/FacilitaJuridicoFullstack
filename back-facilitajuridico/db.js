// Chama a biblioteca pg para conectar ao banco de dados
const { Client } = require("pg");

// Dados para conexão do banco de dados
const connectionData = {
  host: "localhost",
  port: 5432,
  database: "facilitajuridico",
  user: "postgres",
  password: "admin",
};

// Instancia o cliente
const client = new Client(connectionData);

// Conecta ao banco de dados
client.connect()
  .then(() => {
    console.log("Conexão bem-sucedida com o banco de dados");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  })

// Exporta o arquivo para ser usado no app.js
module.exports = client;