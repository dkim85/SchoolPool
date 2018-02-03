// Twilio Credentials

module.exports = function (phoneTo, phoneFrom) {
    const accountSid = 'AC8cb0275d6e431c8ffaa1097481c941d6';
    const authToken = '41def554aa7f8d81dc93a83c2dc46b43';
    
    // require the Twilio module and create a REST client
    const client = require('twilio')(accountSid, authToken);

    client.messages.create({
            to: phoneTo,
            from: phoneFrom,
            body: 'You are riding with ' +  + 'contact them at ' +  + 'and set up a pick up location! Thank you for using SchoolPool!',
        },
        (err, message) => {
            console.log(message.sid);
        }
    );

}