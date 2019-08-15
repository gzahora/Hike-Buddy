module.exports = function(sequelize, Sequelize) {
  var Park = sequelize.define("park", {
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
      type: Sequelize.DECIMAL(8, 4),
      allowNull: false
    },
    longitude: {
      type: Sequelize.DECIMAL(8, 4),
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
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    map: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    short_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state_name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Park;
};
