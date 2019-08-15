module.exports = function(sequelize, Sequelize) {
  var login = sequelize.define("login", {
    username: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  });
  return login;
};
