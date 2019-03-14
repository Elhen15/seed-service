/* 
* how to:
* readFromTopic(topicName, groupId, (data) => console.log(data), (err) => console.log(err));
*/
const kafka = require('kafka-node');
const options = require('./kafka-consumer-group-configurations');

module.exports = (topicName, groupId, nextStepFunction, errorFunction) => {
    options.groupId = groupId;
    const consumerGroupStream = new kafka.ConsumerGroupStream(options, topicName);

    consumerGroupStream.on('data', (message) => {
        consumerGroupStream.commit({topic: topicName, partition: 0, offset: message.offset}, true, () => {
            nextStepFunction(message);
        });              
    });

    consumerGroupStream.on('error', (err) => {
        errorFunction({'err': err});
    });
}