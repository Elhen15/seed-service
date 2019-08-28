const os = require('os');

const params = {};

function getZookeeperParams() {
	// express
	params.port = process.env.PORT || 7800;

	// logger
	params.elkPort = process.env.ELK_PORT || 46780;
	params.elkHost = process.env.ELK_HOST || 'elk-dev-lga-2';
	params.logLevel = process.env.LOG_LEVEL || 'info';

	// kafka
	params.kafkaHost = process.env.KAFKA_HOST || 'skp-dev-kfk-1:9092, skp-dev-kfk-2:9092, skp-dev-kfk-3:9092';

	// topics
	params.testTopic = process.env.TEST_TOPIC || 'test.t';

	// for swagger - if running on localhost
	params.serviceRoute = params.serviceRoute || (`${os.hostname()}:${params.port || '7800'}`);
}

function getOpenshiftParams() {
	params.environment = process.env.ENVIRONMENT || 'predev';
	params.serviceName = process.env.SERVICE_NAME || 'node-seed-service';

	// for swagger
	params.serviceRoute = process.env.SERVICE_ROUTE;
}

module.exports = {
	params,
	getZookeeperParams,
	getOpenshiftParams,
};
