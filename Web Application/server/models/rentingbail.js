'use strict';
module.exports = function(sequelize, DataTypes) {
  var RentingBail = sequelize.define('RentingBail', {
    AdministrativeDocumentRentingBail: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        RentingBail.belongsTo(models.User, {
          foreignKey : 'userId',
            onDelete : 'CASCADE',
        });
      }
    }
  });
  return RentingBail;
};