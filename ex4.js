var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function (err, data) {
  if (err) return;
  console.log(data.toString().match(/\n/g).length);
});
