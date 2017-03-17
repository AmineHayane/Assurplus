var Sequelize = require('sequelize');
var yourDB = "postgres://mnaenlkwidxxds:1db0957bb78fc8caf1ce5cff1292b1f2fdb1a887088f393855b2cd57e433cf3d@ec2-23-21-213-202.compute-1.amazonaws.com:5432/dbm0sq2ngtnhfb";
var sequelize = new Sequelize(yourDB, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

module.exports = sequelize;