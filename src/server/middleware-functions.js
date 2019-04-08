function accessControlMiddleware() {
    return function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        console.log('Added Access-Control-Allow-Headers');
        next();
    }
}

function errorHandlerMiddleware() {
    return function(err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
}

module.exports = {
    accessControlMiddleware, 
    errorHandlerMiddleware
};