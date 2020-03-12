const os = require('os');

const params = {};

// default values are highly not recommended
const getZookeeperParams = () => {
	// express
	params.port = process.env.PORT;

	// logger
	params.elkPort = process.env.ELK_PORT;
	params.elkHost = process.env.ELK_HOST;
	params.logLevel = process.env.LOG_LEVEL;

	// kafka
	params.kafkaHost = process.env.KAFKA_HOST;

	// topics
	params.testTopic = process.env.TEST_TOPIC;

	// for swagger - if running on localhost
	params.serviceRoute = params.serviceRoute || (`${os.hostname()}:${params.port || '7800'}`);
};

const getOpenshiftParams = () => {
	params.environment = process.env.ENVIRONMENT || 'predev';
	params.serviceName = process.env.SERVICE_NAME || 'node-seed-service';

	// for swagger
	params.serviceRoute = process.env.SERVICE_ROUTE;
};

module.exports = {
	params,
	getZookeeperParams,
	getOpenshiftParams,
};
