const
  bodyParser = require('body-parser'),
  config = require('config'),
  crypto = require('crypto'),
  express = require('express'),
  https = require('https'),
  request = require('request');

var app = express();
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
//app.use(bodyParser.json({ verify: verifyRequestSignature }));
app.use(express.static('public'));

/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
app.post('/helloHttp', function(req, res) {
//exports.helloHttp = function helloHttp (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
  //console.log("Request: ",req);
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req));
  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": req, "displayText": response
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
});

app.get('/', function(request, response) {
	console.log("Inside get");
  console.log("New deployment method")
  res.sendStatus(200);
});

// Start server
// Webhooks must be available via SSL with a certificate signed by a valid
// certificate authority.
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
