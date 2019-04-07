const express = require('express');
const app = express();
const routingFunctions = require('./routing-functions');
const middlewareFunctions = require('./middleware-functions');
const swaggerDoc = require('../resources/swagger/swagger-doc');
const bodyParser = require('body-parser');
swaggerDoc(app);

app.use([bodyParser.json(),
        middlewareFunctions.accessControlMiddleware()]);

app.get('/', [routingFunctions.handleGet()]);

app.post('/', [routingFunctions.handlePost()]);

app.get('/p/:paramVal', [routingFunctions.handleGetWithParams()]);

app.get('/p', [routingFunctions.handleGetWithQuery()]);

// test error middleware
/**
 * @swagger
 * /e:
 *  get:
 *      tags: 
 *      - node seed
 *      summary: test the error middleware
 *      description: test the error middleware
 *      consumes: application/json
 *      responses:
 *          500:
 *              description: 'Something broke'
 */ 
app.get('/e', function(){
        throw new Error('Error middleware will catch me');
});

// needs to be last
app.use([middlewareFunctions.errorHandlerMiddleware()]);

module.exports = app;