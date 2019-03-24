const app = require('./app.js');
const zooKeeperAccess = require('skp-zookeeper-node-access');
const zooKeeperUrl = "/skypath/environment/" + process.env.environment + "/node-seed-service/port"
const port = await zooKeeperAccess.getNodeData(zooKeeperUrl);

app.listen(port, () => {
    console.log('Waiting for request at ' + port)
});