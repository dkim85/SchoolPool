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