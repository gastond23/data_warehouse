//Importar models

const User = require('../models/user');
const Region = require('../models/region');
const Country = require('../models/country');
const City = require('../models/city');
const Contact = require('../models/contact');
const Company = require('../models/company');

//Asociaciones en base de datos

Contact.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Contact);
Contact.belongsTo(Company);
Company.belongsTo(City);
Contact.belongsTo(City);
Contact.belongsTo(Country);
Contact.belongsTo(Region);
Country.hasMany(City);
City.belongsTo(Country);
Region.hasMany(Country);
Country.belongsTo(Region);