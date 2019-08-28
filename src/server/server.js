const logger = require('sky-path-logger');

const app = require('./app');
const swaggerDoc = require('../resources/swagger/swagger-doc');
const initLogger = require('../resources/logger/config-logger');
const configControl = require('../resources/init/config-control');
const { params, getZookeeperParams, getOpenshiftParams } = require('../resources/init/init-params');

(async () => {
	try {
		getOpenshiftParams();
		await configControl();
		getZookeeperParams();

		initLogger();

		swaggerDoc(app);
		app.listen(params.port, () => {
			logger.logInfo(`Waiting for request at ${params.port}`);
		});
	} catch (err) {
		logger.logError(`error in node-seed-service occurred - ${err}`);
	}
})();
