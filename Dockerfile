FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# RUN: EXECUTAR
# npm install: INSTALAR as dependências do projeto em Node
RUN npm install

# Copiando o restante dos arquivos
COPY . .

# Definindo a porta que API será rodada
EXPOSE 3000

# Comando para iniciar/escutar a API
CMD [ "npm", "run", "dev"]