module.exports = (async() => {
  const kafkaHostAddress = await require('./kafka-host-address') || 'skp-int-kafka-1:9092';
  return {
    kafkaHost: kafkaHostAddress,
    autoCommit: false,
    sessionTimeout: 10000,
    protocol: ['roundrobin'],
    fromOffset: 'latest'
  };
})();

