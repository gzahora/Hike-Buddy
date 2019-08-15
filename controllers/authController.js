var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signIn");
};

exports.profile = function(req, res) {
  res.render("profile");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("signin");
  });
};
