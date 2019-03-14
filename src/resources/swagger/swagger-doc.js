const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const os = require('os');

const options = {
    swaggerDefinition: {
        info: {
            title: 'app',
            version: '1.0',
            description: 'describe your app here',
            contact: {
                name: 'your name',
                email: 'your email'
            }
        },
        schemes: ['http'],
        host: await zooKeeperAccess.getNodeData("/skypath/environment/dev/zookeeperAccess/node-seed-service/osServiceName") || os.hostname() + ':8080'
    },
    apis: ['the name of the js file'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};