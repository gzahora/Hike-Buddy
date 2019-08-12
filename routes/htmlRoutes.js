/* eslint-disable indent */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

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

  // Load profile page and pass in an example by id
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
