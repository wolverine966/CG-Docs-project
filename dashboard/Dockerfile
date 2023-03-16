# docker file for react

#build react client
FROM node

#working directory

WORKDIR /dashboard

COPY package*.json ./

# Installing

RUN npm install

COPY ..

EXPOSE 3000
