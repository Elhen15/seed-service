const logger = require('sky-path-logger');

function accessControlMiddleware() {
	return function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	};
}

function errorHandlerMiddleware() {
	return function (err, req, res, next) {
		logger.logError(err.stack);
		res.status(500).send(`error occured - ${err.stack}`);
	};
}

module.exports = {
	accessControlMiddleware,
	errorHandlerMiddleware,
};
