const Ajv = require('ajv');
const ajv = new Ajv();

function validateRequest(userData, requestSchema){
    let validate = ajv.compile(requestSchema);  
    let validation = {isValid: validate(userData), errorDetails: validate.errors};
    return validation;
}

module.exports = {
    validateRequest
}