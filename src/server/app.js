const express = require('express');
const bodyParser = require('body-parser');

const routingFunctions = require('./routing-functions');
const middlewareFunctions = require('./middleware-functions');

const app = express();

app.use([bodyParser.json(),
	middlewareFunctions.accessControlMiddleware()]);

app.get('/', [routingFunctions.handleGet()]);

app.post('/', [routingFunctions.handlePost()]);

app.get('/p/:paramVal', [routingFunctions.handleGetWithParams()]);

app.get('/p', [routingFunctions.handleGetWithQuery()]);

/**
 * @swagger
 * /e:
 *      get:
 *              tags:
 *              - node seed
 *              summary: test the error middleware
 *              description: test the error middleware
 *              consumes: application/json
 *              responses:
 *                      500:
 *                              description: 'Something broke'
 */
// test error middleware
app.get('/e', (req, res, next) => {
	throw new Error('Error middleware will catch me');
});

// needs to be last
app.use([middlewareFunctions.errorHandlerMiddleware()]);

module.exports = app;
