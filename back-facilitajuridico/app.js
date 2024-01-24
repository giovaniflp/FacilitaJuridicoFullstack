// Cria e inicia a aplicação express e setta a porta para 4000
const express = require('express');
const app = express();
const port = 4000;

// Setta o cors para permitir requisições de outros domínios
const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

// Cria a conexão com o banco de dados e setta o body parser para json, testando usando postman
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Cria a tabela da aplicação
app.get('/api/criarTabelaClientes', async (req, res) => {

  await db.query(
    `CREATE TABLE IF NOT EXISTS clientes (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telefone VARCHAR(255) NOT NULL,
      x integer NOT NULL,
      y integer NOT NULL
    )`
  );

  res.send("Tabela criada!");

});

// Lista todos os clientes registrados no banco de dados
app.get("/api/listarClientes", async (req, res) => {

  const result = await db.query("SELECT * FROM clientes");

  res.json(result.rows);

});

// Lista todos os clientes registrados no banco de dados em ordem decrescente
app.get("/api/listarClientesDecrescente", async (req, res) => {
  
    const result = await db.query("SELECT * FROM clientes ORDER BY nome DESC");
  
    res.json(result.rows);
  
  }
);


// Lista todos os clientes registrados no banco de dados em ordem crescente
app.get("/api/listarClientesCrescente", async (req, res) => {
  
  const result = await db.query("SELECT * FROM clientes ORDER BY nome ASC");
  
  res.json(result.rows);
  
}
);

// Lista os clientes registrados no banco por ordem decrescente de email
app.get("/api/listarEmailsDecrescente", async (req, res) => {
    
    const result = await db.query("SELECT * FROM clientes ORDER BY email DESC");
    
    res.json(result.rows);
    
  }
);

// Lista os clientes registrados no banco por ordem crescente de email
app.get("/api/listarEmailsCrescente", async (req, res) => {
      
      const result = await db.query("SELECT * FROM clientes ORDER BY email ASC");
      
      res.json(result.rows);
      
    }
);

// Lista os clientes registrados no banco por ordem decrescente de telefone
app.get("/api/listarTelefonesDecrescente", async (req, res) => {
          
          const result = await db.query("SELECT * FROM clientes ORDER BY telefone DESC");
          
          res.json(result.rows);
          
        }
);

// Lista os clientes registrados no banco por ordem crescente de telefone
app.get("/api/listarTelefonesCrescente", async (req, res) => {
              
              const result = await db.query("SELECT * FROM clientes ORDER BY telefone ASC");
              
              res.json(result.rows);
              
            }
);

// Cadastra um novo cliente no banco de dados
app.post("/api/cadastrarCliente", async (req, res) => {

  const { nome, email, telefone, x, y } = req.body;

  const result = await db.query(
    "INSERT INTO clientes (nome, email, telefone, x, y) VALUES ($1, $2, $3, $4, $5)",
    [nome, email, telefone, x, y]
  );

  res.json(result.rows);

}
);

// Calcula a rota de entregas para os clientes de acordo com as coordenadas X e Y de cada um, calcula a distância a partir da soma das coordenadas e ordena do menor para o maior
app.get("/api/calcularRota", async (req, res)=>{
  const result = await db.query("select nome, x, y from clientes order by x + y asc")
  res.json(result.rows);
})

// Monstra no console a porta em que o servidor está rodando
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});