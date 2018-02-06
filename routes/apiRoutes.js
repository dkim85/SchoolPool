var db = require("../models");


module.exports = function(app) {


  app.get("/api/all", function(req, res) {
    db.lists.findAll({})
    .then(function(data) {
      res.json(data);
    });

  });

    app.post("/api/all", function(req, res) {
    db.lists.create(req.body)
    console.log(req.body)
    
})

  app.get("/api/sms", function(req, res) {
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

  })

//   app.get("/api/all/false", function(req, res) {
//     db.burgers.findAll({
//         where:{
//             complete:false
//         }
//     }).then(function(data) {
//       res.json(data);
//     });

//   });


//   app.post("/api/all", function(req, res) {
//     db.burgers.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(data) {
//       res.json(data);
//     });

//   });


//   app.delete("/api/all", function(req, res) {
//     db.burgers.destroy({
//       where: {
//         id: req.body.id
//       }
//     })
//     .then(function(data) {
//       res.json(data);
//     });

//   });


//   app.put("/api/all", function(req, res) {
//     db.burgers.update({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     })
//     .then(function(data) {
//       res.json(data);
//     });

//   });
};