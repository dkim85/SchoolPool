var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");

var twilio = require('twilio');

var accountSid = 'AC8cb0275d6e431c8ffaa1097481c941d6'; // Your Account SID from www.twilio.com/console
var authToken = '41def554aa7f8d81dc93a83c2dc46b43';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Wsup muthafucka',
    to: '+17142931407',  // Text this number
    from: '+14242334439' // From a valid Twilio number
})
.then((message) => console.log(message.sid));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});