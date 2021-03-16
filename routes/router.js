const express = require('express');

const router = express.Router();

const authController = require('../middleware/authentication');

const userController = require('../controller/users');

const contactsController = require('../controller/contacts');

const regionController = require('../controller/regions');

const companiesController = require('../controller/companies');

const upload = require('../middleware/uploads');

const searcher = require('../middleware/searcher');

//Router views

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Login YPF'
    });
});

//Router Controllers

router.post('/login', userController.loginUsuario);

router.post('/usuario', authController.userOk, authController.adminVerification, userController.crearUsuario);

router.get('/usuarios', authController.userOk, authController.adminVerification, userController.verUsers);

router.get('/contactos', authController.userOk, contactsController.getAllContacts);

router.post('/contactos', authController.userOk, contactsController.postNewContact);

router.get('/contactos', authController.userOk, contactsController.getContact);

router.post('/contactos', authController.userOk, contactsController.updateContact);

router.delete('/contactos', authController.userOk, contactsController.deleteContact);

router.get('/contactos', authController.userOk, contactsController.getContactsByRegion);

router.get('/form-contact', authController.userOk, contactsController.contactCreateForm);

router.post('/region', authController.userOk, authController.adminVerification, regionController.postNewRegion);

router.post('/country', authController.userOk, authController.adminVerification, regionController.postNewCountry);

router.post('/city', authController.userOk, authController.adminVerification, regionController.postNewCity);

router.get('/region_city', authController.userOk, regionController.allRegions);

router.get('/companies', authController.userOk, companiesController.getAllCompanies);

router.get('/companies-json', authController.userOk, companiesController.getAllCompaniesJson);

router.post('/companies', authController.userOk, companiesController.postNewCompany);

router.delete('/region', authController.userOk, regionController.deleteRegion);

router.put('/region', authController.userOk, regionController.updateRegion);

router.delete('/country', authController.userOk, regionController.deleteCountry);

router.put('/country', authController.userOk, regionController.updateCountry);

router.delete('/city', authController.userOk, regionController.deleteCity);

router.put('/city', authController.userOk, regionController.updateCity);

router.get('/region', authController.userOk, regionController.allRegionsJSON);

router.post('/countries', authController.userOk, regionController.getCountries);

router.post('/cities', authController.userOk, regionController.getCities);

router.put('/companies', authController.userOk, companiesController.editCompany);

router.delete('/companies', authController.userOk, companiesController.deleteCompany);

router.post('/editar-contacto', authController.userOk, upload.single('img'), contactsController.updateContact);

router.post('/uploads', authController.userOk, upload.single('img'), contactsController.postNewContact);

router.put('/usuario', authController.userOk, authController.adminVerification, userController.editUser);

router.delete('/usuario', authController.userOk, authController.adminVerification, userController.deleteUser);

router.delete('/delete-contactos', authController.userOk, contactsController.deleteAllContacts);

router.post('/search-contacto', authController.userOk,
    searcher.busquedaNombre,
    searcher.busquedaApellido,
    searcher.busquedaMail,
    searcher.busquedaPuesto,
    searcher.busquedaInteres,
    searcher.busquedaTelefono,
    searcher.busquedaCompania,
    searcher.busquedaRegión,
    searcher.busquedaCountry,
    searcher.busquedaCiudad);

module.exports = router;