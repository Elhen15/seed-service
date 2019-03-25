(async() => {
    const options = require('./kafka-consumer-group-configurations');
    skpKafka.readFromTopic(topicName, groupId, options, (data) => console.log(data), (err) => console.log(err));
})();