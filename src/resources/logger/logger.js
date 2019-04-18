const logger = require('sky-path-logger');
const host = process.env.elkHost || 'elk-dev-lga-2';
const port =  process.env.elkPort || 45612;

logger.initializeLogger('info',{ host: host, port: port });

logger.initializeMessageFrame({ microserviceData:
    { systemName: 'SkyPath',
      serviceName: process.env.serviceName || 'node-seed-service',
      serviceVersion: '1.0',
      podId: 'OVERRIDE' },
   tags:
    [ '@node-seed'] 
});

module.exports = logger;