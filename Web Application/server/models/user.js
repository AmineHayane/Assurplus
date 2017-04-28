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
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });

  return User;
};