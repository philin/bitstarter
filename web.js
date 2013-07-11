var express = require('express');

var app = express.createServer(express.logger());

var f = './index.html';
//var fileBuffer = fs.readFileSync(f, 'utf-8');
//var theString = fileBuffer.toString();

app.get('/', function(request, response) {
  response.send(fs.readFileSync(f, 'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

