FROM docker-registry-default.app.osft/amitshlo/debian-node:9.6_node-10.13.0_nr AS node
WORKDIR /usr/src/app

COPY . .

EXPOSE 9001

CMD node server.js