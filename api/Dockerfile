# Dockerfile 

FROM node 

#create

WORKDIR /app

#install
COPY package*.json .

RUN npm install

COPY ..

#exports
EXPOSE 8000
