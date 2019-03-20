const kafkaHostAddress = require('./kafka-host-address');
const kafkaHost = (kafkaHostAddress.kafkaHostServer || 'skp-dev-kafka-1') + ':' + (kafkaHostAddress.kafkaHostPort || '9092');

module.exports = {
  kafkaHost: kafkaHost,
  autoCommit: false,
  sessionTimeout: 10000,
  protocol: ['roundrobin'],
  fromOffset: 'latest'
};