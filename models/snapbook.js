'use strict';
module.exports = (sequelize, DataTypes) => {
  var snapbook = sequelize.define('snapbook', {
    name: DataTypes.STRING,
    template: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  snapbook.associate = function(models) {
    // associations can be defined here
  };
  return snapbook;
};