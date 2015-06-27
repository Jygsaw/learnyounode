var fs = require('fs');
var path = require('path');
module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function (err, data) {
    if (err) return callback(err);
    var filtered = [];
    data.forEach(function (elem) {
      if (path.extname(elem) === '.' + ext) {
        filtered.push(elem);
      }
    });
    callback(null, filtered);
  });
}
