module.exports = (sequelize, DataTypes) => {
  const Uploads = sequelize.define('Uploads', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Uploads;
};