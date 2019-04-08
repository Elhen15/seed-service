node-seed
===============

<blockquote>
This project was created in order to avoid all boilerplate configuration when starting NodeJS development.
</blockquote>

## Preparations
Make sure that your npm registry is set to verdaccio. If not, run `npm set registry http://esb-dev-dck-1:4873`.
<br/>
In order to use zookeeper you must set `process.env.environment` and `process.env.zookeeperServer`.
<br/> 
zookeeperServer is now hard-coded in config-control.js, change both zookeeperServer and zooKeeperUrl configurations if needed.
<br/>
Use [`zooki-UI`](http://zooki-skp.app.osft/) or [`createNode & setNodeData`](https://bitbucket.app.iaf/projects/SP/repos/skp-zookeeper-node-access/browse) functions to insert to zookeeper all the needed configurations,
<br/>
such as the `kafkaHost` and the express `port`.
<br/>
Full list of mandatary configurations for the seed can be seen in config-control.js. You can also add costume configurations.
<br/>
Check out the node-seed example at zooki for more information.

## Getting Started
Run `npm install` to install decencies.
<br/>
Run `npm start` to execute the server.
<br/>
Navigate to `http://localhost:7800/`.
<br/>
The app will automatically reload if you change any of the source files.
<br/>
If using open shift create `process.env.environment` & `process.env.zookeeperServer`.
<br/>
Also, consider creating `process.env.serviceName` or just leave it hard-coded in config-control.js.
<br/>
Navigate to `http://localhost:7800/api-docs/` to watch the swagger Ui for this project.
<br/>
In order to execute your requests from swagger - create osServiceName node on zookeper if running on OS, if not - delete this node or leave it unset.
<br/>
## Running unit tests

Run `npm test` to execute the unit tests via [`Jest`](https://confluence.app.iaf/display/MP/Jest).

## Styleguide

Built according to node [`standards`](https://confluence.app.iaf/pages/viewpage.action?pageId=40502350) and [`styleguide`](https://bitbucket.app.iaf/projects/MP/repos/styleguides/browse/node/node-styleguide.md).

## Further help

To get more help contact ESB team.

## Technologies
1. http server using express 
2. swageer using swagger-ui-express & swagger-jsdoc
3. kafka using skp-kafka-node build on kafka-node
4. logger using sky-path-logger logger, build on winston
5. oracle db using ???
6. mongo db using mongodb
7. json validation using ajv