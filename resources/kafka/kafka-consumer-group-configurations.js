const kafkaHost = (process.env.kafkaHost || 'skp-dev-kafka-1') + ':' + (process.env.kafkaPort || '9092');

module.exports = {
  kafkaHost: kafkaHost,
  autoCommit: false,
  sessionTimeout: 10000,
  protocol: ['roundrobin'],
  fromOffset: 'latest'
};