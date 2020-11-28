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
    email: Sequelize.STRING,
    phone: Sequelize.STRING
})

module.exports = Company;