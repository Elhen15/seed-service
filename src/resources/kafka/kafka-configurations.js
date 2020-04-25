const { params } = require('../init/init-params');


const consumerGroupConfigurations = {
	kafkaHost: params.kafkaHost,
	autoCommit: true,
	sessionTimeout: 20000,
	protocol: ['roundrobin'],
	fromOffset: 'earliest',
};

const clientConfigurations = {
	kafkaHost: params.kafkaHost,
	connectTimeout: 1000,
	requestTimeout: 1000,
	autoConnect: true,
	connectRetryOptions: {
		retries: 5,
		factor: 2,
		minTimeout: 2000,
		maxTimeout: 2000,
		randomize: true,
	},
};

module.exports = { consumerGroupConfigurations, clientConfigurations };
