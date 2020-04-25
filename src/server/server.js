const logger = require('sky-path-logger');
const configControl = require('../resources/init/config-control');
const swaggerDoc = require('../resources/swagger/swagger-doc');
const initLogger = require('../resources/logger/config-logger');
const {
	params,
	getZookeeperParams,
	getOpenshiftParams,
} = require('../resources/init/init-params');
const app = require('./app');


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
	} catch (error) {
		logger.logError(`error in node-seed-service occurred - ${error}`);
	}
})();
