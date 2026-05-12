# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Copia os arquivos do projeto para o diretório padrão do Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY data.js /usr/share/nginx/html/
COPY main.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

# Expõe a porta 80 do container
EXPOSE 80

# Inicia o servidor web
CMD ["nginx", "-g", "daemon off;"]
