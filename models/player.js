'use strict';
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Player.belongsTo(models.Game, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Player;
};