### Instance Pool Manager

#### What is instance pool manager?
* This service collects requests from the user(any kind of request, right now it takes requests to take snapshots of webpages)
* Stores the request in a queue(RabbitMQ)
* Another service running on the back end fetches the requests from the queue and starts processing the requests(this uses phantomjs to take snapshots)
* After processing the request has been processed the result of the request is cached and served to the client
* This can have multiple main processes which fork children to get the requests processed quickly

#### Architecture Diagram
![Alt Text](/images/Instance Pool.png)

#### Dependancies
* You need to have RabbitMQ server setup on localhost
