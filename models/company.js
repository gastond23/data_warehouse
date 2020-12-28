const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const Company = sequelize.define('company', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    adress: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    phone: Sequelize.STRING
})

module.exports = Company;