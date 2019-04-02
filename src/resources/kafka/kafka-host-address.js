process.env.zookeeperServer = 'skp-int-zook-1';
const zooKeeperAccess = require('skp-zookeeper-node-access');
const zooKeeperUrl = "/skypath/environment/" + (process.env.environment || 'predev') + "/node-seed-service/kafkaHost";
module.exports =  (async() => {return await zooKeeperAccess.getNodeData(zooKeeperUrl)})();