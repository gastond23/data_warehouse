//Importar dependencias instaladas

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv');

const cors = require('cors');

const ejs = require('ejs');

const path = require('path');

const ejsLint = require('ejs-lint');

const cookieParser = require('cookie-parser');

const multer = require('multer');




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

//Setear app y configuraciones

dotenv.config();

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({
    dest: path.join(__dirname, 'private/img')
}).single('image'));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(cors());

app.use(router);

app.post('/upload', (req, res) => {
    const file = req.file;
    const path = file.destination + '/' + file.filename;
    res.status(200).render('form-contact', {
        title: 'Crear Contacto',
        path: path,
        status: 200
    })
})

//Asociaciones en base de datos

Contact.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
});
User.hasMany(Contact);
Contact.belongsTo(Company);
Company.belongsTo(City);
Contact.belongsTo(City);
Country.hasMany(City);
City.belongsTo(Country);
Region.hasMany(Country);
Country.belongsTo(Region);

//Iniciando servidor esperando la configuración o inico de la base de datos

sequelize
    //.sync({ force: true })
    .sync()
    .then(result => {
        app.listen(process.env.APP_PORT, () => {
            console.log('Server initializated on port: ' + process.env.APP_PORT);
        })
    })
    .catch(err => {
        console.log(err);
    })