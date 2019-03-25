module.exports = (async() => {
  const kafkaHostAddress = await require('./kafka-host-address') || 'skp-int-kafka-1:9092';
  return {  
    kafkaHost: kafkaHostAddress,
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
  }
})();