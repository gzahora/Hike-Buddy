module.exports = function (sequelize, Sequelize) {
  var Parks = Sequelized.define("parks", {
    state:{
      type: Sequelized.STRING,
      allowNull: false
    },
    park_name:{
    type: Sequelized.STRING,
    allowNull: false
    },
    acres:{
      type: Sequelized.INTEGER,
      allowNull: false
    },
    latitude:{
      type: Sequelized.INTEGER,
      allowNull: false
    },
    longitude:{
      type: Sequelized.INTEGER,
      allowNull: false
    },
    ranking:{
      type: Sequelized.INTEGER,
      allowNull: false
    },
    visited:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    wishList:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Parks;
};