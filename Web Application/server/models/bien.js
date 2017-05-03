
module.exports = function(sequelize, DataTypes) {
  var biens = sequelize.define('biens', {
    prixachat: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    description: DataTypes.STRING,
    dateachat: DataTypes.STRING,
    evaluation: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        biens.belongsToMany(models.User, {
          as : 'users',
          through : 'UserBiens',
            foreignKey : 'biensId',
            otherKey : 'userId'
        });
      },
    }
  });
  
  return biens;
};

