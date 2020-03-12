const Ajv = require('ajv');

const ajv = new Ajv();

const validation = (userData, requestSchema) => {
	const validate = ajv.compile(requestSchema);
	return { isValid: validate(userData), errorDetails: validate.errors };
};

module.exports = validation;
