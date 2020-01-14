'use strict';
module.exports = (sequelize, DataTypes) => {
  const Writer = sequelize.define('Writer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Writer.associate = function(models) {
    Writer.hasMany(models.Novel)
    // associations can be defined here
  };
  return Writer;
};