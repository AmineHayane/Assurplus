'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rib = sequelize.define('Rib', {
    RibUrl: DataTypes.STRING,
    RibIban: DataTypes.STRING,
    RibBic: DataTypes.STRING,
    RibNom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Rib.belongsToMany(models.User, {
          as : 'users',
          through : 'UserRib',
            foreignKey : 'ribId',
            otherKey : 'userId'
        });
      }
    }
  });
  return Rib;
};