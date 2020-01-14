'use strict';
module.exports = (sequelize, DataTypes) => {
  const Novel = sequelize.define('Novel', {
    Novelname: DataTypes.STRING,
    wirid: DataTypes.INTEGER
  }, {});
  Novel.associate = function(models) {
    
    // associations can be defined here
  };
  return Novel;
};