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

const {
    config
} = require('./config/config');

require('./data/associatons');

//Importar router

const router = require('./routes/router');

//Setear app y configuraciones


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
    .sync()
    .then(result => {
        app.listen(config.app_port, () => {
            console.log('Server initializated on port: ' + config.app_port);
        })
    })
    .catch(err => {
        console.log(err);
    })