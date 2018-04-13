'use strict';
module.exports = (sequelize, DataTypes) => {
  var snapbooksPhotos = sequelize.define('snapbooksPhotos', {
    photoId: DataTypes.INTEGER,
    snapbookId: DataTypes.INTEGER
  }, {});
  snapbooksPhotos.associate = function(models) {
    // associations can be defined here
  };
  return snapbooksPhotos;
};