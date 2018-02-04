var db = require("../models");


module.exports = function (app) {

  
  app.get("/api/all/:id", function (req, res) {

    var id = req.params.id;

    db.lists.findAll({
      where: {
        id: id
      }
    }).then(function (data) {
      res.json(data);
    })
  })



  app.get("/api/all/:school?", function (req, res) {

    var school = req.params.school;

    if (school) {
      console.log(`search for ${school}`)
      db.lists.findAll({
        where: {
          destination: school
        }
      }).then(function (data) {
        res.json(data);
      })
    }
    else if (!school){
      console.log(`print all`)
      db.lists.findAll({})
        .then(function (data) {
          res.json(data);
        });
    }

  });

  app.get("/api/all/users")

  app.post("/api/postRide", function (req, res) {
    db.lists.create(req.body)
    // console.log(req.body)

  })

  app.post("/api/joinRide", function (req, res) {
    console.log(req.body)
    db.users.create(req.body)   

  })

  app.put("/api/update", function(req, res) {
    console.log(req.body)
        db.lists.update({
          currentSeats:req.body.currentSeats
        }, {
          where: {
            id: req.body.id
          }
        })        
  
      });

  
};


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