# Use uma imagem base com Node.js
FROM node:18.13-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale o Angular CLI globalmente
RUN npm install -g @angular/cli@15.2.10

# Instale as dependências
RUN npm install --force

# Copie o resto do código-fonte para o diretório de trabalho
COPY . .

# Construa o aplicativo Angular
RUN ng build

FROM nginx:alpine

# Copie apenas os arquivos necessários da etapa de construção
COPY --from=0 /app/dist/* /usr/share/nginx/html

# Adiciona a configuração customizada para lidar com rotas de SPA
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 (ou a porta que você configurou no Angular)
EXPOSE 80
