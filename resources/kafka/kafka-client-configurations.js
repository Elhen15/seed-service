const kafkaHost = (process.env.kafkaHost || 'skp-dev-kafka-1') + ':' + (process.env.kafkaPort || '9092');

module.exports = {
  kafkaHost: kafkaHost,
  connectTimeout: 1000,
  requestTimeout: 1000,
  autoConnect: true,
  connectRetryOptions: {
    retries: 5,
    factor: 2,
    minTimeout: 1000,
    maxTimeout: 1000,
    randomize: true
  }
};