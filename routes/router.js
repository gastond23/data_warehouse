const express = require('express');

const router = express.Router();

const authController = require('../controller/authentication');

const userController = require('../controller/users');

const contactsController = require('../controller/contacts');

router.post('/login', userController.loginUsuario);

router.post('/usuario', userController.crearUsuario);

router.get('/usuario', authController.userOk, authController.adminVerification, userController.verUsers);

router.get('/contactos', authController.userOk, contactsController.getAllContacts);

router.post('/contactos', authController.userOk, authController.adminVerification, contactsController.postNewContact);

router.get('/contactos', authController.userOk, contactsController.getContact);

router.post('/contactos', authController.userOk, authController.adminVerification, contactsController.updateContact);

router.delete('/contactos', authController.userOk, authController.adminVerification, contactsController.deleteContact);

module.exports = router;