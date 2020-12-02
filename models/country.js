const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const Country = sequelize.define('country', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: Sequelize.STRING
});

module.exports = Country;