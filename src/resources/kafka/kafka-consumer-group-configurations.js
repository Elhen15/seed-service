module.exports = {
    kafkaHost: process.env.kafkaHost || 'skp-int-kafka-1:9092',
    autoCommit: false,
    sessionTimeout: 10000,
    protocol: ['roundrobin'],
    fromOffset: 'latest'
};