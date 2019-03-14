const app = require('./app.js');
const zooKeeperAccess = require('skp-zookeeper-node-access');
const port = await zooKeeperAccess.getNodeData("/skypath/environment/dev/zookeeperAccess/node-seed-service/post");

app.listen(port, () => {
    console.log('Waiting for request at ' + port)
});