const logger = require('sky-path-logger');
const host = 
const port = 
logger.initializeLogger('info',{ host: 'dummy-host-1', port: 44444 });

logger.initializeMessageFrame({ microserviceData:
    { systemName: 'SkyPath',
      serviceName: 'reception-matrix-connectivity-consumer',
      serviceVersion: '1.0',
      podId: 'OVERRIDE' },
   skypathMessageId: 'dafb2cd6-655a-4e7e-8fbf-5dcd84e20d4b',
   additionalIds:[
    { systemName: 'NADIV',
      itemId: '777',
      systemId: '02' }
   ],
   tags:
    [ '@nitur-Tahalici','@esb' ] });