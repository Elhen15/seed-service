process.env.zookeeperServer = 'skp-int-zook-1';
const zooKeeperAccess = require('skp-zookeeper-node-access');
const zooKeeperUrl = "/skypath/environment/" + (process.env.environment || 'predev') +
"/"+ (process.env.serviceName || 'node-seed-service') + "/";
let err = '';

async function getDynamicNodeData(nodeName){
    await zooKeeperAccess.getNodeData(zooKeeperUrl + nodeName)
    .then((data) => process.env[nodeName] = data)
    .catch((currentError) => {
        err = err + '\n' + currentError + ' ' + nodeName;
        delete process.env[nodeName];
    });
}

module.exports = (async() => {
    await getDynamicNodeData('port');
    await getDynamicNodeData('osServiceName');
    await getDynamicNodeData('kafkaHost');
    await getDynamicNodeData('elkHost');
    await getDynamicNodeData('elkPort');
    return(err === '' ? ({data: 'success', err: null}) : ({data: null, err: err}));
})();