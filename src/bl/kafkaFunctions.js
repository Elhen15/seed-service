const skpKafka = require('skp-kafka-node');

const clientOptions = require('../resources/kafka/kafka-client-configurations');
skpKafka.writeToTopic({test: 'test'}, 'test.t', clientOptions).then((data) => console.log('works')).catch((err) => console.log("doesn't work- " + err));

const cgOptions = require('../resources/kafka/kafka-consumer-group-configurations');
skpKafka.readFromTopic('test.t', 'test', cgOptions, (data) => console.log(data), (err) => console.log(err));



