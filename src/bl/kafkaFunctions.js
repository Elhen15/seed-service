const skpKafka = require('skp-kafka-node');

(async() => {
    const options = await require('../resources/kafka/kafka-client-configurations');
    skpKafka.writeToTopic({test: 'test'}, 'test.t', options).then((data) => console.log('works')).catch((err) => console.log("doesn't work- " + err));
})();


(async() => {
    const options = await require('../resources/kafka/kafka-consumer-group-configurations');
    skpKafka.readFromTopic('test.t', 'bla', options, (data) => console.log(data), (err) => console.log(err));
})();


