const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const { params } = require('../init/init-params');

module.exports = (app) => {
	const options = {
		swaggerDefinition: {
			info: {
				title: 'app',
				version: '1.0',
				description: 'describe your app here',
				contact: {
					name: 'your name',
					email: 'your email',
				},
			},
			schemes: ['http'],
			host: params.serviceRoute,
		},
		apis: ['src/server/app.js'],
	};

	const specs = swaggerJsdoc(options);
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
