const kafka = require('kafka-node');
const options = require('./kafka-consumer-group-configurations');

module.exports = (topicName, groupId) => {
    return new Promise((resolve, reject) => {
        options.groupId = groupId;
        const consumerGroup = new kafka.ConsumerGroup(options, topicName);
    
        consumerGroup.on('message', (message) => {
            consumerGroup.commit((err, data) => {
                err ? reject(err) : resolve(message);
            });
        });
    
        consumerGroup.on('error', (err) => {
            reject(err);
        });
    });
}