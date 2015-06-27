// initialize variables
var port = process.argv[2];
var file = process.argv[3];
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  var fileStream = fs.createReadStream(file);
  fileStream.pipe(response);
});

server.listen(port);
