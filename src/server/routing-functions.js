const logger = require('sky-path-logger');

const validate = require('../resources/validation/validate');

function validationHandler(requestSchema) {
	return function (req, res, next) {
		try {
			const validation = validate(req.body, requestSchema);
			if (validation.isValid) {
				logger.logInfo('validation succeeded');
				next();
			} else {
				logger.logError(`validation failed:\n ${validation.errorDetails}`);
				res.send(validation.errorDetails);
			}
		} catch (error) {
			logger.logError(`error in validation Handler:\n ${error}`);
			next(error);
		}
	};
}

function handleGet() {
	return function (req, res) {
		logger.logInfo('get requests');
		res.send('get request');
	};
}

function handlePost() {
	return function (req, res) {
		logger.logInfo('post requests');
		res.send('post request');
	};
}

// http://localhost:7800/p/VALUE
function handleGetWithParams() {
	return function (req, res) {
		logger.logInfo(`get requests with params ${req.params.paramVal}`);
		res.send(`get requests with params ${req.params.paramVal}`);
	};
}

// http://localhost:9001/p?paramVal=VALUE
function handleGetWithQuery() {
	return function (req, res) {
		logger.logInfo(`get requests with query ${req.query.paramVal}`);
		res.send(`get requests with query ${req.query.paramVal}`);
	};
}

module.exports = {
	validationHandler,
	handleGet,
	handlePost,
	handleGetWithParams,
	handleGetWithQuery,
};
