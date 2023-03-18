# CRUD Customers

## 📖 Introdução

API para gerenciamento de clientes construída em JS com Express e Prisma.

## 🌳 Variáveis de ambiente

Antes de iniciar o servidor, crie um arquivo .env na raíz do projeto como exemplificado em [template.env](template.env) com as seguintes variáveis de ambiente:

| NOME | DESCRIÇÃO | DEFAULT |
|------|-----------|---------|
| DATABASE_URL| URL para conexão com o banco. Exemplos de url podem ser encontrados [aqui](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-postgres) | Não definida |

## ⚙️ Instalação de dependências

Para instalar as dependências do projeto, execute o comando:

```shell
npm install
```

## 🚶 Migrations

Quase lá! O último passo antes de iniciar o servidor é executar as migrações. Para isso, use o comando:

```shell
npx prisma migrate dev
```

## ⏯️ Iniciar o servidor

Pronto! Agora é só executar o comando `npm run dev` e a API estará disponível em [http://localhost:3000/customers](http://localhost:3000/customers).

## 👽 Principais tecnologias utilizadas

* [Node](https://nodejs.org/en)
* [Express](https://expressjs.com/)
* [Prisma](https://www.prisma.io/)
* [Express Validator](https://express-validator.github.io/docs)
