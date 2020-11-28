const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const Region = sequelize.define('region', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING
});

module.exports = Region;