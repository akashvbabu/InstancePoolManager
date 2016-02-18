#!/usr/bin/env node
//this is a test script to simulate the client requests
var amqp = require('amqplib/callback_api');
var msg = {name:'akash',url:'http://google.com'};
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: true}); //make durable:true to make it a work queue
    ch.sendToQueue(q, new Buffer(JSON.stringify(msg)),{persistent:true}); //add {persistent:true} to produce to a work queue
    console.log(" [x] Sent '%s'", JSON.stringify(msg));
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
