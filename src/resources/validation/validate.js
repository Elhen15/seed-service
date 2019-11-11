const Ajv = require('ajv');

const ajv = new Ajv();

module.exports = (userData, requestSchema) => {
	const validate = ajv.compile(requestSchema);
	const validation = { isValid: validate(userData), errorDetails: validate.errors };
	return validation;
};
