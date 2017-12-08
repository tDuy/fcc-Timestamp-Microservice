// server.js

// init project
var express = require('express');
var app = express();
var processDate = require('./process');


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// date param
app.get('/:input', (req, res) => {
  var result = processDate(req.params.input);
  res.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
