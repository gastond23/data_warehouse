const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv');

//Importar base de datos para inicialización y asociaciones

const sequelize = require('./data/database');

//Importar router

const router = require('./routes/router');

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

app.use(router);

//Asociaciones en base de datos

Contact.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Contact);
Contact.belongsTo(Company);
Company.belongsTo(City);
Company.belongsTo(Country);
Company.belongsTo(Region);
Contact.belongsTo(City);
Contact.belongsTo(Country);
Contact.belongsTo(Region);
City.belongsTo(Country);
Country.belongsTo(Region);

//Iniciando servidor esperando la configuración o inico de la base de datos

sequelize
    .sync({
        force: true
    })
    //.sync()
    .then(result => {
        app.listen(process.env.APP_PORT, () => {
            console.log('Server initializated on port: ' + process.env.APP_PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })