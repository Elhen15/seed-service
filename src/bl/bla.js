const skpKafka = require('skp-kafka-node');

async function writeToTopic(){
    const options = await require('../resources/kafka/kafka-client-configurations');
    console.log(options);
    skpKafka.writeToTopic({test: 'test'}, 'test.t', options).then((data) => console.log('works')).catch((err) => console.log("doesn't work- " + err));
}

writeToTopic();