node-seed
===============

<blockquote>
This project was created in order to avoid all boilerplate configuration when starting NodeJS development.
</blockquote>

## Preparations
Make sure that your npm registry is set to verdaccio. If not, run `npm set registry http://esb-dev-dck-1:4873`.
<br/>
In order to use zookeeper you must set `process.env.zookeeperServer` (a default value is given in config-control.js).
<br/> 
Also, `process.env.ENVIRONMENT` and `process.env.SERVICE_NAME` are needed (default values are given in init-params.js).
<br/>
This three environment variables should be set in openshift. If running locally default values would be used.
<br/>
Use [`zooki-UI`](http://zooki-skp.app.osft/) or [`createNode & setNodeData`](https://bitbucket.app.iaf/projects/SP/repos/skp-zookeeper-node-access/browse) functions to insert to zookeeper all the needed configurations,
<br/>
such as the service `LOG_LEVEL` and the express `PORT`.
<br/>
Full list of mandatary configurations for the seed can be seen in config-control.js.
<br/>
Check out the node-seed example at zooki for more information.
<br/>
You can also add costume configurations.
<br/>
Costume configurations must be added to config-control.js and then to init-params.js under getZookeeperParams().
<br/>
To access any param just require init-params.js in your file, assign it to { params } and then use params.YOUR_PARAM_NAME.
<br/>

## Getting Started
Run `npm install` to install decencies.
<br/>
Run `npm start` to execute the server.
<br/>
Navigate to `http://localhost:7800/`.
<br/>
The app will automatically reload if you change any of the source files.
<br/>
If using openshift - create `ENVIRONMENT`, `SERVICE_NAME`, `SERVICE_ROUTE` and `zookeeperServer`.
<br/>
Navigate to `http://localhost:7800/api-docs/` or `openshiftRoute/api-docs/`  to watch the swagger Ui for this project.
<br/>

## Running eslint
Use npm run lint to see style errors.
<br/>
Use npm run lintfix to auto fix errors.
<br/>
NOTE - the seed has some build in errors - 

```bash
\node-seed-service\src\resources\init\config-control.js
  34:4  error  Expected the Promise rejection reason to be an Error  prefer-promise-reject-errors

\node-seed-service\src\server\middleware-functions.js
   4:9   warning  Unexpected unnamed function       func-names
  12:9   warning  Unexpected unnamed function       func-names
  12:34  error    'next' is defined but never used  no-unused-vars

\node-seed-service\src\server\routing-functions.js
   6:9  warning  Unexpected unnamed function  func-names
  24:9  warning  Unexpected unnamed function  func-names
  31:9  warning  Unexpected unnamed function  func-names
  39:9  warning  Unexpected unnamed function  func-names
  47:9  warning  Unexpected unnamed function  func-names
```

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

## Notes
*`utilities Folder` - will contain basic functions which will be used in sky-path project.
<br/>
Also, contains the basic configuration for the project.
<br/>
*`jest module` - open isue with npm i jest. If needed take the module from `E:\Node Modules\jest_23.6.0`.

