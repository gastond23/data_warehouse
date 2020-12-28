const Sequelize = require('sequelize');

const sequelize = require('../data/database');

const Contact = sequelize.define('contact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    position: Sequelize.STRING,
    phone: Sequelize.STRING,
    img: Sequelize.STRING,
    interest: Sequelize.INTEGER,
    adress: Sequelize.STRING
});

module.exports = Contact;