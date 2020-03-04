const Ajv = require('ajv');

const ajv = new Ajv();

const validation = (userData, requestSchema) => {
	const schema = ajv.compile(requestSchema);
	return { isValid: schema(userData), errorDetails: schema.errors };
};

module.exports = validation;
