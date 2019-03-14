const writeToTopic = require('../../../src/resources/kafka/read-from-topic');
readFromTopic('test1.t', 'liza1', (data) => console.log(data), (err) => console.log(err));