(async() => {
    await require('../resources/utilities/configControl');
    const app = require('./app.js');
    //const zooKeeperAccess = require('skp-zookeeper-node-access');
    //const zookeeperUrl = require('../resources/utilities/shared').zookeeperUrl;

    /*zooKeeperAccess.getNodeData(zookeeperUrl + 'port').then((port)=> {
        app.listen(port, () => {
            console.log('Waiting for request at ' + port)
        });
    });*/   
    let port = process.env.port || 7800;
    app.listen(port, () => {
        console.log('Waiting for request at ' + port)
    });
})();

