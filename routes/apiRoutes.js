var db = require("../models");

module.exports = function(app) {
  // Get all parks (order by ranking)
  app.get("/api/parks/rank", function(req, res) {
    db.Park.findAll({ order: [["ranking", "ASC"]] }).then(function(dbparks) {
      console.log(dbparks);
      res.json(dbparks);
    });
  });

  // Get all parks (order alphabetically)
  app.get("/api/parks/alpha", function(req, res) {
    db.parks.findAll({ order: [["park_name", "ASC"]] }).then(function(dbparks) {
      console.log(dbparks);
      res.json(dbparks);
    });
  });

  // Get parks by state
  app.get("/api/parks/:state", function(req, res) {
    db.parks
      .findAll({
        order: [["park_name", "ASC"]],
        where: { state: req.params.state }
      })
      .then(function(dbparks) {
        console.log(dbparks);
        res.json(dbparks);
      });
  });

  // Get parks by search
  // app.get("/api/parks/:parkName", function(req, res) {
  //   var parkName = req.params.parkName;
  //   db.parks
  //     .findAll({ where: { park_name: db.sequelize.where(db.sequelize.fn("LOWER", db.sequelize.col("park_name")), "LIKE", "%" + parkName + "%" } })
  //     .then(function(dbparks) {
  //       console.log(dbparks);
  //       res.json(dbparks);
  //     });
  // });
};
