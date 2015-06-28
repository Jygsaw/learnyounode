// initialize variables
var port = process.argv[2];
var http = require('http');
var url = require('url');
var server = http.createServer(handler);
server.listen(port);

// HELPERS
function handler(req, res) {
  var parsedUrl = url.parse(req.url, true);
  var json = null;

  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      json = getTimeHash(parsedUrl.query.iso);
      break;
    case '/api/unixtime':
      json = getUnixTime(parsedUrl.query.iso);
      break;
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(json));
}

function getTimeHash(dateStr) {
  var isoDate = new Date(dateStr);
  return {
    hour: isoDate.getHours(),
    minute: isoDate.getMinutes(),
    second: isoDate.getSeconds(),
  };
}

function getUnixTime(dateStr) {
  var isoDate = new Date(dateStr);
  return {
    unixtime: isoDate.getTime(),
  };
}
