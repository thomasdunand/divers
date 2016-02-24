/**
 * Server start script
 * @type {exports}
 */
var restify = require("restify");

/**
 * Server
 * @type {Server}
 */
var server = restify.createServer({
  name: 'totodudu'
});

server.use(restify.bodyParser({mapParams: true}));
server.use(restify.authorizationParser());
server.use(restify.queryParser());

/**
 * Events
 */

server.on('uncaughtException', function(request, response, route, err){
  console.log(err.stack);
  response.send(new restify.InternalServerError(err.message));
});

server.on('after', function(request, response, route, err){
  if(err) console.log(err.stack);
});

server.listen(8080, function() {
  console.log({evt:"system", msg: server.name +' is listening on ' + server.url});
});

require('./routes/routes')(server);


