const writeToTopic = require('../resources/kafka/write-to-topic');
writeToTopic({test: 'test'}, 'test.t').then((data) => console.log('works')).catch((err) => console.log(err));