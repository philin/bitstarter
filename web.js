var express = require('express');

var app = express.createServer(express.logger());

var f = 'index.html';
var fileBuffer = fs.readFileSync(f);

app.get('/', function(request, response) {
  response.send(fileBuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
