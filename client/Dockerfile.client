FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/kusari-client
WORKDIR /srv/app/kusari-client

COPY package.json /srv/app/kusari-client

RUN npm install

COPY . /srv/app/kusari-client

CMD ["npm", "start"]

