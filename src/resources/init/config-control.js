process.env.zookeeperServer = process.env.zookeeperServer || 'skp-int-zoo-1:2181,skp-int-zoo-2:2181,skp-int-zoo-3:2181';
const zooKeeperAccess = require('skp-zookeeper-node-access');

const { params } = require('./init-params');

const getDynamicNodeData = async (nodeName, zooKeeperUrl) => {
	try {
		process.env[nodeName] = await zooKeeperAccess.getNodeData(zooKeeperUrl + nodeName);
	} catch (err) {
		delete process.env[nodeName];
		throw err;
	}
};

const initConfigControl = async () => {
	const zooKeeperServiceUrl = `/skypath/environment/${params.environment}/${params.serviceName}/`;
	const zooKeeperEnvUrl = `/skypath/environment/${params.environment}/`;

	try {
		await getDynamicNodeData('PORT', zooKeeperServiceUrl);
		await getDynamicNodeData('ELK_PORT', zooKeeperEnvUrl);
		await getDynamicNodeData('ELK_HOST', zooKeeperEnvUrl);
		await getDynamicNodeData('LOG_LEVEL', zooKeeperServiceUrl);
		await getDynamicNodeData('KAFKA_HOST', zooKeeperEnvUrl);
		await getDynamicNodeData('TEST_TOPIC', zooKeeperServiceUrl);
	} catch (err) {
		throw new Error(`error occurred while connecting to zookeeper - ${err}`);
	}
};

module.exports = initConfigControl;
