(async() => {
    const configControl = await require('../resources/utilities/config-control');
    const logger = require('../resources/logger/logger');
    const app = require('./app');
    const port = process.env.port || 7800;
    
    logger.addConsoleEndPoint();
    configControl.err != null ? logger.logWarning(configControl.err) : '';

    app.listen(port, () => {
        console.log('Waiting for request at ' + port)
    });
})();

