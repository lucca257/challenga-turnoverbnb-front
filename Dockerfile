FROM node:18-alpine3.15

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g npm@8.12.1
RUN npm install

COPY --chown=1000:www-data ./ .

EXPOSE 8080

ENTRYPOINT ["sh", "./start.sh"]
