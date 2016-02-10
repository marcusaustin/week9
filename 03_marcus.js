var port = process.argv[2];
var net = require('net');
var server = net.createServer(respond);

function respond(socket){

	d = new Date();
	socket.end(d.toString());
}


console.log('listening on port',port);
server.listen(port);