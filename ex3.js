var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
console.log(buffer.toString().match(/\n/g).length);
