const logger = require('sky-path-logger');

const accessControlMiddleware = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
};

const errorHandlerMiddleware = (err, req, res) => {
	logger.logError(err.stack);
	res.status(500).send(`error occured - ${err.stack}`);
};


module.exports = {
	accessControlMiddleware,
	errorHandlerMiddleware,
};
