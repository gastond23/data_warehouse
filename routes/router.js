const express = require('express');

const router = express.Router();

const authController = require('../middleware/authentication');

const userController = require('../controller/users');

const contactsController = require('../controller/contacts');

const regionController = require('../controller/regions');

//Router views

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Login YPF'
    });
});

router.get('/signup', (req, res) => {
    res.render('signup', {
        title: 'Sign Up YPF'
    })
});

/* router.get('/contacts', (req, res) => {
    res.render('home', {
        title: 'Contactos'
    })
}) */


//Router Controllers

router.post('/login', userController.loginUsuario);

router.post('/usuario', userController.crearUsuario);

router.get('/usuario', authController.userOk, authController.adminVerification, userController.verUsers);

router.get('/contactos', contactsController.getAllContacts);

router.post('/contactos', authController.userOk, authController.adminVerification, contactsController.postNewContact);

router.get('/contactos', authController.userOk, contactsController.getContact);

router.post('/contactos', authController.userOk, authController.adminVerification, contactsController.updateContact);

router.delete('/contactos', authController.userOk, authController.adminVerification, contactsController.deleteContact);

router.get('/contactos', authController.userOk, contactsController.getContactsByRegion);

router.post('/region', authController.userOk, authController.adminVerification, regionController.postNewRegion);

router.post('/country', authController.userOk, authController.adminVerification, regionController.postNewCountry);

router.post('/city', authController.userOk, authController.adminVerification, regionController.postNewCity);

module.exports = router;