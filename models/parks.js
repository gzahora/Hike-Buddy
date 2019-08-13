module.exports = function(sequelize, Sequelize) {
  var Parks = sequelize.define("parks", {
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    park_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    acres: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    latitude: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    longitude: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    ranking: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    visited: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    wishList: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Parks;
};
