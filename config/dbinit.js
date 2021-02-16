const sequelize = require('../data/database');
const Contact = require('../models/contact');
const User = require('../models/user');
const Region = require('../models/region');
const Country = require('../models/country');
const City = require('../models/city');
const Company = require('../models/company');

const contacts = [{
        name: 'Carlos',
        lastname: 'Perez',
        email: 'cprez@mail.com',
        position: 'Developer',
        phone: '+549111234567890',
        img: 'avatar.jpg',
        adress: 'Dirección 1234',
        interest: 50,
        userId: 1,
        companyId: 1,
        cityId: 1,
    },
    {
        name: 'Marcelo',
        lastname: 'Gonzalez',
        email: 'mgonzalez@mail.com',
        position: 'Developer',
        phone: '+549111234567890',
        img: 'avatar.jpg',
        adress: 'Dirección 1234',
        interest: 75,
        userId: 1,
        companyId: 1,
        cityId: 1,
    }
];

const users = [{
        name: 'Admin',
        lastname: 'Admin',
        email: 'admin@mail.com',
        admin: 1,
        password: 'admin1234'
    },
    {
        name: 'User',
        lastname: 'user',
        email: 'user@mail.com',
        admin: 0,
        password: 'user1234'
    }
];

const regions = [{
        name: 'Sudamérica'
    },
    {
        name: 'Norteamérica'
    },
    {
        name: 'Centroamérica'
    },
    {
        name: 'Europa'
    },
    {
        name: 'Asia'
    },
    {
        name: 'Oceanía'
    }
];

const countries = [{
        name: 'Estados Unidos',
        regionId: 2
    },
    {
        name: 'Argentina',
        regionId: 1
    },
    {
        name: 'Canada',
        regionId: 2
    },
    {
        name: 'España',
        regionId: 4
    },
    {
        name: 'Australia',
        regionId: 6
    },
    {
        name: 'Costa Rica',
        regionId: 2
    },
    {
        name: 'Panamá',
        regionId: 2
    },
    {
        name: 'China',
        regionId: 5
    },
    {
        name: 'Francia',
        regionId: 4
    },
    {
        name: 'Reino Unido',
        regionId: 4
    }
];
