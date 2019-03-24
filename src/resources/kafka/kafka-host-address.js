const zooKeeperAccess = require('skp-zookeeper-node-access');
const zooKeeperUrl = "/skypath/environment/" + process.env.environment + "/node-seed-service/kafkaHost"
module.exports = await zooKeeperAccess.getNodeData(zooKeeperUrl);