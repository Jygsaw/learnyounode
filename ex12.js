// initialize variables
var port = process.argv[2];
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
  request.pipe(map(upperTrans)).pipe(response);
});

server.listen(port);

// HELPER FUNCTIONS
function upperTrans(chunk) {
  var neo = chunk.toString().toUpperCase();
  return neo;
}
