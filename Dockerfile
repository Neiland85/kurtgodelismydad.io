FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN git clone https://github.com/Neiland85/appbogado.git

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ] 
