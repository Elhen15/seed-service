module.exports = (async() => {
    process.env.zookeeperServer = 'skp-int-zook-1';
    const zooKeeperAccess = require('skp-zookeeper-node-access');
    const zooKeeperUrl = "/skypath/environment/" + (process.env.environment || 'predev') +
                         "/"+ (process.env.serviceName || 'node-seed-service') + "/";

    try {
        process.env.port               = await zooKeeperAccess.getNodeData(zooKeeperUrl + "port");
        console.log(process.env.port);
        /*process.env.osServiceName      = await zooKeeperAccess.getNodeData(zooKeeperUrl + "osServiceName");
        process.env.kafkaHostAddress   = await zooKeeperAccess.getNodeData(zooKeeperUrl + "kafkaHostAddress");*/
        return({data: 'succeed', err: null});
    } catch(err) {
        return({data: null, err: err});
    }  
})();