process.env.zookeeperServer = process.env.zookeeperServer || 'skp-int-zoo-1:2181,skp-int-zoo-2:2181,skp-int-zoo-3:2181';
const zooKeeperAccess = require('skp-zookeeper-node-access');

const { params } = require('./init-params');

let err = '';

async function getDynamicNodeData(nodeName, zooKeeperUrl) {
	await zooKeeperAccess.getNodeData(zooKeeperUrl + nodeName)
		.then((data) => {
			process.env[nodeName] = data;
		})
		.catch((currentError) => {
			err = `${err}\n${currentError} ${nodeName}`;
			delete process.env[nodeName];
		});
}

module.exports = () => {
	const zooKeeperServiceUrl = `/skypath/environment/${params.environment}/${params.serviceName}/`;
	const zooKeeperEnvUrl = `/skypath/environment/${params.environment}/`;

	return new Promise(async (resolve, reject) => {
		await getDynamicNodeData('PORT', zooKeeperServiceUrl);
		await getDynamicNodeData('ELK_PORT', zooKeeperEnvUrl);
		await getDynamicNodeData('ELK_HOST', zooKeeperEnvUrl);
		await getDynamicNodeData('LOG_LEVEL', zooKeeperServiceUrl);
		await getDynamicNodeData('KAFKA_HOST', zooKeeperEnvUrl);
		await getDynamicNodeData('TEST_TOPIC', zooKeeperServiceUrl);

		if (err === '') {
			resolve();
		} else {
			reject(`error occurred while connecting to zookeeper - ${err}`);
		}
	});
};
