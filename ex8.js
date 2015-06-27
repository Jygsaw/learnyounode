var http = require('http');
http.get(process.argv[2], function (response) {
  var chunks = [];
  response.on('error', console.error);
  response.on('data', function (data) {
    chunks.push(data.toString());
  });
  response.on('end', function() {
    var string = chunks.join('');
    console.log(string.length);
    console.log(string);
  });
});
