#!/usr/bin/env node
var amqp = require('amqplib/callback_api'); //rabbitmq node client
var spawn = require('child_process').spawn; //to spawn a child process
var phantomjs = require('phantomjs'); //phantomjs library
var Redis = require('ioredis');
var redis = new Redis();

//connect to rabbit node on the localhost
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello'; //channel where the client requests are stored

    ch.assertQueue(q, {durable: true}); //check if the queue exists, create one if not found
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.prefetch(1); //don't ask more than one message from rabbit
    ch.consume(q, function(msg) { //consume the message when available and start processing the request
      var msg1 = JSON.parse(msg.content.toString());
      console.log(" [x] Received %s", msg.content.toString());
      if(msg1.url){
        var phantomProcess = spawn(phantomjs.path,['./takeSnapshot.js',msg1.url]); //take snapshot
        var outputString = "";
        phantomProcess.stdout.on('data', (data) =>{
          //aggregate data here
          outputString += data;
          console.log('stdout:'+data);
        });

        phantomProcess.stderr.on('data',(data)=>{
          console.log(data);
        });

        phantomProcess.on('close', (code)=>{
          console.log('exited with code:'+code);
          //store the data in some intermediate data structure
          //send ack to msg after the phantom process exits
          redis.set(msg1.url,outputString);
          outputString = '';
          ch.ack(msg);
        });
      }
    }, {noAck: false});
  });
});
