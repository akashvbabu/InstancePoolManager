### Instance Pool Manager
![Alt Text](https://travis-ci.org/akashvbabu/InstancePoolManager.svg?branch=master)

#### What is instance pool manager?
* This service collects requests from the user(any kind of request, right now it takes requests to take snapshots of webpages)
* Stores the request in a queue(RabbitMQ)
* Another service running on the back end fetches the requests from the queue and starts processing the requests(this uses phantomjs to take snapshots)
* After processing the request has been processed the result of the request is cached and served to the client
* This can have multiple main processes which fork children to get the requests processed quickly

#### Architecture Diagram
![Alt Text](./images/InstancePool2.png)

#### Dependencies

##### RabbitMQ Server
* Instructions to setup and run RabbitMQ can be found at https://www.rabbitmq.com/download.html

##### Redis Server
* Instructions to setup and run Redis can be found at http://redis.io/download

#### Running Instructions 
* ...To be completed

