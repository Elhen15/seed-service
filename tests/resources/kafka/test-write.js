const writeToTopic = require('../../../src/resources/kafka/write-to-topic');
writeToTopic({test: 'test'}, 'test1.t').then((data) => console.log('works')).catch((err) => console.log(err));