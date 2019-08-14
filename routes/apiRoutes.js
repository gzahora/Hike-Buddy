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

  app.post("/", function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
      connection.query(
        "SELECT * FROM accounts WHERE username = ? AND password = ?",
        [username, password],
        function(error, results) {
          if (results.length > 0) {
            request.session.loggedin = true;
            request.session.username = username;
            response.redirect("profile");
          } else {
            response.send("Incorrect Username and/or Password!");
          }
          response.end();
        }
      );
    } else {
      response.send("Please enter Username and Password!");
      response.end();
    }
  });
};
