const writeToTopic = require('./writeToTopic.js');
const readFromTopic = require('./readFromTopic.js');

//writeToTopic({test: 'test3'}, 'test.t').then((data) => console.log('works')).catch((err) => console.log("doesn't work"));
readFromTopic('test.t', 'liza').then((data) => console.log(data)).catch((err) => console.log(err));