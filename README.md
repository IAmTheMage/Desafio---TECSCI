# ⚡ Monitoramento de Usinas — STEMIS TECSCI

Sistema desenvolvido em **TypeScript** com o framework **NestJS** para monitoramento de usinas.

---

## 🚀 Tecnologias Utilizadas

- 🧠 **NestJS** — Framework para construção de aplicações escaláveis com Node.js
- 🛢️ **PostgreSQL** — Banco de dados relacional
- 🔄 **Prisma ORM** — Mapeamento objeto-relacional com foco em produtividade
- 🐋 **Docker & Docker Compose** — Para ambiente de banco de dados
- 🧪 **Jest** — Framework de testes

---

## 🤔 Por que essas escolhas?

### ✅ NestJS

NestJS fornece:

- Arquitetura opinativa ➜ mais **organização** e **padronização**
- Produtividade em equipes grandes
- Melhor equilíbrio entre **flexibilidade** e **estrutura**

🔎 Diferente de microframeworks como Express/Fastify, o NestJS ajuda a manter **consistência no código**.  
🔧 Não foi usado Django ou AdonisJS por serem mais rígidos ou terem menor comunidade (caso do AdonisJS).

---

### ✅ Prisma ORM

- Geração automática de tipos TypeScript
- **Autocompletar** e **validação** durante o desenvolvimento
- Simples, moderno e com boa documentação

---

### ✅ PostgreSQL

- Banco de dados robusto, maduro e bem suportado
- Compatível com todo o ecossistema Node.js

---

## 🛠️ Como usar o sistema?

### 1. Instale o Node.js (v21.4.0)

> ⚠️ O sistema foi testado com Node v21.4.0. Use essa versão para evitar incompatibilidades.

#### 🔧 Linux (Ubuntu/Debian)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm install 21.4.0
nvm use 21.4.0
```

#### 🪟 Windows

Baixe e instale via site oficial:  
👉 [Baixar Node.js](https://nodejs.org/en/download)

---

### 2. Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-diretorio>
```

---

### 3. Instale as dependências

```bash
npm install
```

Instale também a CLI do Prisma (se necessário):

```bash
npm install prisma --save-dev
```

---

## 🐳 Usando Docker Compose

Você pode usar o Docker para subir o banco de dados automaticamente:

### Requisitos

- Docker `v26.1.3`
- Docker Compose instalado

### ⚙️ Instalação do Docker

- 🔗 [Instalação no Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- 🔗 [Instalação no Windows](https://www.docker.com/products/docker-desktop/)

### 🧱 Subindo o banco de dados

```bash
sudo docker-compose up --build
```

Depois, copie o arquivo `.env.sample` e configure seu `.env`:

```bash
cp .env.sample .env
```

---

### 📦 Migrando o banco

```bash
npx prisma migrate dev --name init
# ou
npm run migrate
```

---

### ▶️ Rodando o projeto

```bash
npm run start
```

Quando o projeto for executado a primeira ele irá automáticamente pegar os dados de metrics.json e adicionar no banco selecionado

Acesse: [http://localhost:3000/api](http://localhost:3000/api)  
🔍 Documentação da API disponível via Swagger!

---

## 🧪 Rodando os testes

Configure o ambiente de testes com `.env.test` (um exemplo já está disponível).

```bash
npm run test
```

✅ O sistema possui:
- 8 suites de testes
- 26 testes no total  
✅ **Alta cobertura das funcionalidades principais**

Caso não funcione ou dê algum erro na execução você pode utilizar o comando:

```
npm run clean
```