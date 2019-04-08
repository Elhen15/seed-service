(async() => {
    const configControl = await require('../resources/utilities/config-control');
    const app = require('./app');
    const port = process.env.port || 7800;
    
    configControl.err != null ? console.log(configControl.err) : '';

    app.listen(port, () => {
        console.log('Waiting for request at ' + port)
    });
})();

