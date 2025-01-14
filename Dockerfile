FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g @vue/cli
RUN npm install

COPY . .

EXPOSE 8080

CMD npm run serve