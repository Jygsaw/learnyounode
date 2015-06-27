var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket) {
  var date = new Date();
  var dateStr =
    date.getFullYear() + '-' +
    zeroPad(date.getMonth() + 1, 2) + '-' +
    zeroPad(date.getDate(), 2) + ' ' +
    zeroPad(date.getHours(), 2) + ':' +
    zeroPad(date.getMinutes(), 2);
  socket.end(dateStr)
});
server.listen(port);

function zeroPad(num, width) {
  var pad = '';
  for (var i = 0; i < width; i++) {
    pad += '0';
  }
  return (pad + num).slice(-width);
}
