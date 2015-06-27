var http = require('http');
var urlInfo = [];
var collected = 0;

// register urls
for (var i = 2; i < process.argv.length; i++) {
  urlInfo.push({
    url: process.argv[i],
    data: '',
  })
}

// fetch data
urlInfo.forEach(collectData);


// HELPER FUNCTIONS
function collectData(config) {
  http.get(config.url, function (response) {
    var chunks = [];
    response.on('error', console.error);
    response.on('data', function (data) {
      chunks.push(data.toString());
    });
    response.on('end', function() {
      config.data = chunks.join('');
      collected++;
      if (collected === urlInfo.length) {
        displayData();
      }
    });
  });
}


function displayData() {
  for (var i = 0; i < urlInfo.length; i++) {
    console.log(urlInfo[i].data);
  }
}
