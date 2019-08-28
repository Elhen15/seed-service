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

// needs to be last
app.use([middlewareFunctions.errorHandlerMiddleware()]);

module.exports = app;
