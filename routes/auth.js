var authController = require("../controllers/authController.js");
// var db = require("../models");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.get("/profile", isLoggedIn, authController.profile);
  app.get("/logout", authController.logout);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/profile",
      failureRedirect: "/signup"
    })
  );
  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/profile",
      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }
};
