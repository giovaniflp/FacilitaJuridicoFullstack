
# Gerenciamento de clientes

Desafio proposto pela Facilita Jurídico para verificar nível e código para vaga de Fullstack Júnior

Ferramentas Utilizadas
-

NextJs 14 + React 18,
Axios,
ExpressJs 4 + NodeJS,
PostgreSQL 16
## Ligar o BackEnd

Clone o projeto

```bash
  git clone https://github.com/giovaniflp/FacilitaJuridicoFullstack.git
```

Diretório do BackEnd

```bash
  cd .\FacilitaJuridicoFullstack\back-facilitajuridico\  
```

Instale os módulos Node

```bash
  npm install
```
Dados Para Conexão com o Banco de Dados
```bash
  host: "localhost",
  port: 5432,
  database: "facilitajuridico",
  user: "postgres",
  password: "admin",
```

DDL do Banco de Dados
```bash
create table clientes
(
    id       serial
        primary key,
    nome     varchar(255) not null,
    email    varchar(255) not null,
    telefone varchar(255) not null,
    x        integer      not null,
    y        integer      not null
);

alter table clientes
    owner to postgres;
```

Ligue o servidor

```bash
  nodemon app.js
```
Porta do BackEnd

```bash
http://localhost:4000
```

Ligar o FrontEnd
-

Após ligar o BackEnd e conectar com o Banco de Dados, abra outro terminal e siga os seguintes passos:

```bash
cd .\FacilitaJuridicoFullstack\front-facilitajuridico\
```

Instale os módulos Node para o Front

```bash
  npm install
```

Inicie o Front

```bash
  npm run dev
```

Porta do FrontEnd

```bash
http://localhost:3000
```
