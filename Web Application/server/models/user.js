module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_mail: {
      type : DataTypes.STRING,
        allowNull: false,
        validate : {
        },
    },
    user_password: {
      type : DataTypes.STRING,
        allowNull : false,
    },
      UserGender: {
      type : DataTypes.STRING,
      },
      UserFirstName: {
      type : DataTypes.STRING,
      },
      UserLastName: {
      type : DataTypes.STRING,
      },
      UserLivingSituation: {
      type : DataTypes.STRING,
      },
      UserJob: {
      type : DataTypes.STRING,
      },
      UserPaymentType: {
      type : DataTypes.STRING,
      },
      UserIncome: {
      type : DataTypes.STRING,
      },
      UserIdentityDocument: {
      type : DataTypes.STRING,
      },
      UserBirthDate: {
      type : DataTypes.DATEONLY,
      },
      UserProfilePicture: {
      type : DataTypes.STRING,
      },
      UserIdentityModifed : {
      type : DataTypes.BOOLEAN,
      }
  }, {
    classMethods: {
      associate: (models) => {
        User.belongsToMany(models.PhoneNumber, {
          as : 'phoneNumbers',
          through : 'UserPhoneNumber',
            foreignKey : 'userId',
            otherKey : 'phoneNumberId'
        });
        User.belongsToMany(models.biens, {
          as : 'biens',
          through : 'UserBiens',
            foreignKey : 'userId',
            otherKey : 'biensId'
        });
        User.belongsToMany(models.Habitation, {
          as : 'habitations',
          through : 'UserHabitation',
            foreignKey : 'userId',
            otherKey : 'habitationId'
        });
        User.belongsToMany(models.Rib, {
          as : 'ribs',
          through : 'UserRib',
            foreignKey : 'userId',
            otherKey : 'ribId'
        });
        User.hasMany(models.RentingBail, {
          foreignKey : 'userId',
            as : 'rentingbails'
        });
      },
    }
  });

  return User;
};