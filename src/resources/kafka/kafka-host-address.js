const zooKeeperAccess = require('skp-zookeeper-node-access');
const kafkaHostServer = await zooKeeperAccess.getNodeData("/skypath/environment/dev/zookeeperAccess/node-seed-service/kafkaHostServer");
const kafkaHostPort = await zooKeeperAccess.getNodeData("/skypath/environment/dev/zookeeperAccess/node-seed-service/kafkaHostPort");

module.exports = {
    kafkaHostServer,
    kafkaHostPort
}