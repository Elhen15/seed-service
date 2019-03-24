const writeToTopic = require('../resources/kafka/read-from-topic');
readFromTopic('test.t', 'liza', (data) => console.log(data), (err) => console.log(err));