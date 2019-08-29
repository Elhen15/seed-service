const express = require('express');
const bodyParser = require('body-parser');

const routingFunctions = require('./routing-functions');
const middlewareFunctions = require('./middleware-functions');

const app = express();

app.use([bodyParser.json(),
	middlewareFunctions.accessControlMiddleware()]);

/**
 * @swagger
 * /:
 *      get:
 *              tags: 
 *              - node seed
 *              summary: test / url
 *              description: test / url
 *              consumes: application/json
 *              responses:
 *                      200:
 *                              description: 'get'
 */ 
app.get('/', [routingFunctions.handleGet()]);

/**
 * @swagger
 * /:
 *      post:
 *              tags: 
 *              - node seed
 *              summary: test / url
 *              description: test / url
 *              consumes: application/json
 *              responses:
 *                      200:
 *                              description: 'post'
 */ 
app.post('/', [routingFunctions.handlePost()]);

 /**
 * @swagger
 * /p/{paramVal}:
 *  get:
 *      tags:
 *      - node seed
 *      summary: test /p/:paramVal url
 *      description: test /p/:paramVal url
 *      consumes: application/json
 *      parameters:
 *          - in: path
 *            name: paramVal
 *            description: param in get with params
 *            require: true
 *      responses:
 *          200:
 *              description: 'ok'
 */
app.get('/p/:paramVal', [routingFunctions.handleGetWithParams()]);

 /**
 * @swagger
 * /p:
 *  get:
 *      tags:
 *      - node seed
 *      summary: test /p url
 *      description: test /p url
 *      consumes: application/json
 *      parameters:
 *          - in: query
 *            name: paramVal
 *            description: param in get with query
 *            require: true
 *      responses:
 *          200:
 *              description: 'ok'
 */
app.get('/p', [routingFunctions.handleGetWithQuery()]);

// needs to be last
app.use([middlewareFunctions.errorHandlerMiddleware()]);

module.exports = app;
