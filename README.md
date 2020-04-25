Zohar-shemesh-handler-service
===============

<blockquote>
This service handle all the requests from zohar to shemsh api. <br>
This is three lines of description <br>
Anthore line
</blockquote>

## Main entities
```json
Request
{
  Name: string,
  LastName: string,
  Friends: [Human]
}

Response
{
  
}
```

## Requirements
* express
* grpahqljs
* kafkajs
* lodash
* skp-modules
  * skp-logger
  * skp-zookeeper-access
  * skp-kafka
  * skp-tracer

## Getting Started
Run `yarn install --update-checksums` to install depndecies.
<br/>
Run `yarn start` to execute the service.


## Zookeeper-configurations
Parameter | Meaning
------------ | -------------
Tags | The tags that zohar likes
Not-need | All the types not bla bla