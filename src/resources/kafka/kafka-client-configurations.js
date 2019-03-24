const kafkaHostAddress = require('./kafka-host-address');
const kafkaHost = kafkaHostAddress || 'skp-dev-kafka-1:9092';

module.exports = {
  kafkaHost: kafkaHost,
  connectTimeout: 1000,
  requestTimeout: 1000,
  autoConnect: true,
  connectRetryOptions: {
    retries: 5,
    factor: 2,
    minTimeout: 2000,
    maxTimeout: 2000,
    randomize: true
  }
};