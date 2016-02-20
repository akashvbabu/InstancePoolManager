'use strict';

const Hapi = require('hapi'); //import hapi

const server = new Hapi.Server(); //create server
server.connection({ port: 3000 }); //set the listening port

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Interface coming soon!');
    }
});
