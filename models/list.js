'use strict';
module.exports = function(sequelize, DataTypes) {
  var list = sequelize.define('list', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return list;
};
