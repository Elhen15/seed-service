/* 
* how to:
* writeToTopic({test: 'test'}, 'test.t').then((data) => console.log('works')).catch((err) => console.log("doesn't work"));
*/
const kafka = require('kafka-node');
const options = require('./kafka-client-configurations.js');
module.exports = (messages, topicName) => {
    return new Promise((resolve, reject) => {
        const producer = new kafka.Producer(new kafka.KafkaClient(options));

        producer.on('ready', () => {
            console.log('connected to ', options.kafkaHost);
            // send to topic
            producer.send([{topic: topicName , messages: JSON.stringify(messages)}], (err, data) => {
                producer.close();
                err ? reject(err) : resolve(JSON.stringify(data));
            });
        });

        producer.on('error', (err) => {
            producer.close(() => {
                reject(err)
                console.log('producer closed on producer error');
            });
        });
    });
}