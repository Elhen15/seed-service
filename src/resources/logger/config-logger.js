const logger = require('sky-path-logger');

const { params } = require('../init/init-params');

module.exports = () => {
	logger.initializeLogger(params.logLevel, { host: params.elkHost, port: params.elkPort });
	logger.initializeServiceInformation({
		microserviceData: {
			systemName: 'SkyPath',
			serviceName: params.serviceName,
			serviceVersion: '1.0',
			podId: 'OVERRIDE',
		},
		labels: [],
	});
	logger.addConsoleEndPoint();
};
