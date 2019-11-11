FROM docker-registry-default.app.osft/sky-path/basenodeimage:latest AS node
WORKDIR /usr/src/app

EXPOSE 9001
COPY . .

CMD [ "npm", "start" ]