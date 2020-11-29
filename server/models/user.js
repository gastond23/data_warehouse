const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    admin: {
        type: Sequelize.INTEGER(1),
        allowNull: true
    },
    password: Sequelize.STRING
});

module.exports = User;