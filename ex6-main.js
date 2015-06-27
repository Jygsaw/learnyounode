var mod = require('./ex6-mod.js');
mod(process.argv[2], process.argv[3], function (err, data) {
  if (err) return err;
  data.forEach(function (elem) {
    console.log(elem);
  });
});
