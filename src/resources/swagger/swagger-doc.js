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
        host: (process.env.osServiceName) || (os.hostname() + ':' + (process.env.port || '7800'))
    },
    apis: ['src/server/app.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}