var fs = require('fs');
var filter = new RegExp('\.' + process.argv[3] + '$');
fs.readdir(process.argv[2], function (err, data) {
  if (err) return;
  data.forEach(function (elem) {
    if (elem.match(filter)) {
      console.log(elem);
    }
  });
});
