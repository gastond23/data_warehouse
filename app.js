//Importar dependencias instaladas

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

const ejs = require('ejs');

const path = require('path');

const ejsLint = require('ejs-lint');

const cookieParser = require('cookie-parser');

//Importar base de datos para inicialización, asociaciones y configuraciones

const sequelize = require('./data/database');

const dotenv = require('dotenv');

require('./data/associatons');

//Importar router

const router = require('./routes/router');

//Setear app y configuraciones

dotenv.config();

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(cors());

app.use(router);

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