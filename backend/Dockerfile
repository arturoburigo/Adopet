FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

EXPOSE 3333

# Usar o script start:dev para desenvolvimento
CMD ["npm", "run", "start:dev"]