FROM docker-registry-default.app.osft/sky-path/basenodeimage:latest AS node
WORKDIR /usr/src/app

COPY . .

CMD [ "npm", "start" ]
