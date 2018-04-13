'use strict';
module.exports = (sequelize, DataTypes) => {
  var photo = sequelize.define('photo', {
    url: DataTypes.STRING,
    caption: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  photo.associate = function(models) {
    // associations can be defined here
    models.photo.belongsToMany(models.snapbook, {through: "snapbooksPhotos"})
  };
  return photo;
};