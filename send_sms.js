// Twilio Credentials

module.exports = function (sms) {
    var accountSid = 'AC8cb0275d6e431c8ffaa1097481c941d6'; // Your Account SID from www.twilio.com/console
    var authToken = '41def554aa7f8d81dc93a83c2dc46b43';   // Your Auth Token from www.twilio.com/console
    
    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    client.messages.create({
            to: +12138642586,
            from: +19495569807,
            body: 'You are riding with ' +  + 'contact them at ' +  + 'and set up a pick up location! Thank you for using SchoolPool!',
        },
        (err, message) => {
            console.log(message.sid);
        }
    );

};
