const Sequelize = require('sequelize');

const {
    config
} = require('../config/config');


const sequelize = new Sequelize(config.databaseName, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

module.exports = sequelize;