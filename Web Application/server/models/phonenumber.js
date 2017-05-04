'use strict';
module.exports = function(sequelize, DataTypes) {
  var PhoneNumber = sequelize.define('PhoneNumber', {
    PhoneNumberCountryPrefix: DataTypes.INTEGER,
    PhoneNumber: DataTypes.INTEGER,
    PhoneNumberTypeMobile: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: (models) => {
        PhoneNumber.belongsToMany(models.User, {
          as : 'users',
          through : 'UserPhoneNumber',
            foreignKey : 'phoneNumberId',
            otherKey : 'userId'
        });
      },
    }
  });
  return PhoneNumber;
};