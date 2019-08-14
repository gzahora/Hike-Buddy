/* eslint-disable indent */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // app.post("/", function(request, response) {
  //   var username = request.body.username;
  //   var password = request.body.password;
  //   if (username && password) {
  //     connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
  //       if (results.length > 0) {
  //         request.session.loggedin = true;
  //         request.session.username = username;
  //         response.redirect("profile");
  //       } else {
  //         response.send('Incorrect Username and/or Password!');
  //       }
  //       response.end();
  //     });
  //   } else {
  //     response.send('Please enter Username and Password!');
  //     response.end();
  //   }
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load profile page and pass in an example by id
  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  // Load profile page and pass in an example by id
  app.get("/search", function(req, res) {
    res.render("search");
  });

  // display searches in ranked order
  app.get("/searchRanked", function(req, res) {
    db.Park.findAll({ order: [["ranking", "ASC"]] }).then(function(dbparks) {
      res.render("searchRanked", { parks: dbparks });
    });
  });

  // display searches in alphabetical order
  app.get("/searchAlpha", function(req, res) {
    db.Park.findAll({ order: [["park_name", "ASC"]] }).then(function(dbparks) {
      res.render("searchAlpha", { parks: dbparks });
    });
  });

  // Load profile page and pass in an example by id
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
