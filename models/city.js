const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const City = sequelize.define('city', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: Sequelize.STRING
});

module.exports = City;