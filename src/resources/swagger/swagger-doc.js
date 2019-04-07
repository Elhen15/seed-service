const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
//const zooKeeperAccess = require('skp-zookeeper-node-access');
//const zookeeperUrl = require('../utilities/shared').zookeeperUrl;
const os = require('os');

module.exports = (async(app) => {
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
            host: (process.env.osServiceName) || (os.hostname() + ':' + (process.env.port || '7811'))
        },
        apis: ['the name of the js file'],
    };
    
    const specs = swaggerJsdoc(options);
    console.log(options);

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
});