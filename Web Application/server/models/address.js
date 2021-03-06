'use strict';
module.exports = function(sequelize, DataTypes) {
  var Address = sequelize.define('Address', {
    AddressType: DataTypes.STRING,
    AddressNumber: DataTypes.INTEGER,
    AddressLabel: DataTypes.STRING,
    AddressLabelName: DataTypes.STRING,
    AddressZipCode: DataTypes.INTEGER,
    AddressCity: DataTypes.STRING,
    AddressCountry: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Address.hasMany(models.Habitation, {
          foreignKey : 'adressId',
            as : 'habitations'
        });
      }
    }
  });
  return Address;
};