const validate = require('../resources/validation/validate');

function validationHandler(requestSchema){
    return function(req, res, next){
        try {
            let validation = validate.validateRequest(req.body, requestSchema);
            validation.isValid ? next() : res.send(validation.errorDetails);
        } catch (error) {
            console.log('error in validation Handler:\n '+ error);
            next(error);
        }
    } 
}

function handleGet(){
    return function(req, res, next){
        console.log('get requests');
        res.send('get request');
        // next();
    }
}

function handlePost(){
    return function(req, res, next){
        console.log('post requests');
        res.send('post request');
        // next();
    }
}

//http://localhost:7800/p/5
function handleGetWithParams(){
    return function(req, res, next){
        console.log('get requests with params ' + req.params.paramVal);
        res.send('get requests with params ' + req.params.paramVal);
        // next();
    }
}

//http://localhost:9001/p?paramVal=5
function handleGetWithQuery(){
    return function(req, res, next){
        console.log('get requests with query ' + req.query.paramVal);
        res.send('get requests with params ' + req.query.paramVal);
        // next();
    }
}

module.exports = {
    validationHandler, 
    handleGet,
    handlePost,
    handleGetWithParams,
    handleGetWithQuery
}