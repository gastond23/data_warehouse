const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv');

//Importar base de datos para inicialización y asociaciones

const sequelize = require('./data/database');

//Importar models

const User = require('./models/user');
const Region = require('./models/region');
const Country = require('./models/country');
const City = require('./models/city');
const Contact = require('./models/contact');
const Company = require('./models/company');

dotenv.config();

app.use(bodyParser.urlencoded({
    extended: true
}));


//Asociaciones en base de datos

Contact.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Contact);
Contact.belongsTo(Company);
//Company.belongsTo(City);
Contact.belongsTo(City);
City.belongsTo(Country);
Country.belongsTo(Region);

//Iniciando servidor esperando la configuración o inico de la base de datos

sequelize
    .sync({ force: true })
    //.sync()
    .then(result => {
        app.listen(process.env.APP_PORT, () => {
            console.log('Server initializated on port: ' + process.env.APP_PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })