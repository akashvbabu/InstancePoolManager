const Hapi = require('hapi'); //import hapi
require('babel-register')({
  presets: ['es2015', 'react'],
});
server = new Hapi.Server(); //create server
server.connection({ port: 3000 }); //set the listening port

server.register([{
  register: require('inert')
},{
  register: require('vision')
}], function(err){
    if(err)
      throw err;

    server.views({
      engines: {
        js: require('hapi-react-views')
      },
      relativeTo: __dirname,
      path: 'views'
    });

    server.route({
     method: 'GET',
     path: '/{param*}',
     handler: {
       directory: {
         path: 'assets',
         index: ['index.html']
       }
     }
   });

    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply){
          reply.view('Default');
        }
    });

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
