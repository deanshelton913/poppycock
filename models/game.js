'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    shortId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Game.hasMany(models.Player);
      }
    }
  });
  return Game;
};
