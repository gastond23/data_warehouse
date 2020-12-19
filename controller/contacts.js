const {
    networkInterfaces
} = require('os');
const Contact = require('../models/contact');
const Region = require('../models/region');
const Contry = require('../models/country');
const City = require('../models/city');
const Country = require('../models/country');

exports.postNewContact = (req, res, next) => {
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPhone = req.body.phone;
    const newImg = req.body.img;
    const newCompany = req.body.companyId;
    const newCity = req.body.cityId;
    req.user.createContact({
            name: newName,
            email: newEmail,
            phone: newPhone,
            img: newImg,
            companyId: newCompany,
            cityId: newCity
        })
        .then(data => {
            res.status(200).json({
                msg: 'Contacto creado',
                data: data
            });
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                error: err
            });
        })
}

exports.getAllContacts = (req, res, next) => {
    Contact.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        .then(contacts => {
            console.log(JSON.stringify(contacts, null, 2));
            res.status(200).render('home', {
                title: 'Contactos',
                msg: 'Contactos',
                data: contacts
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                error: err
            });
        })
}


exports.getContact = (req, res, next) => {
    const contactId = req.body.id;
    Contact.findByPk(contactId)
        .then(data => {
            res.status(200).json({
                msg: 'Datos Contacto',
                data: data
            });
        })
        .catch(err => {
            res.status(400).json({
                msg: 'ID erróneo o contacto inexistente',
                error: err
            });
        })
}

exports.updateContact = (req, res, next) => {
    const contactId = req.body.id;
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPhone = req.body.phone;
    const newImg = req.body.img;
    const newCompany = parseInt(req.body.companyId);
    const newCity = parseInt(req.body.cityId);
    Contact.findByPk(contactId)
        .then(contact => {
            contact.name = newName;
            contact.email = newEmail;
            contact.phone = newPhone;
            contact.img = newImg;
            contact.companyId = newCompany;
            contact.cityId = newCity;
            contact.save();
            res.status(200).json({
                msg: 'Datos Actualizados',
                data: contact
            });
        })
        .catch(err => {
            res.status(400).json({
                msg: 'ID erróneo o contacto inexistente',
                error: err
            });
        })
}

exports.deleteContact = (req, res, next) => {
    const contactId = req.body.id;
    Contact.findByPk(contactId)
        .then(contact => {
            contact.destroy();
            res.status(200).json({
                msg: 'Contacto borrado',
                data: contact
            });
        })
        .catch(err => {
            res.status(400).json({
                msg: 'ID erróneo o contacto inexistente',
                error: err
            });
        })
}

exports.getContactsByRegion = (req, res, next) => {
    const regionId = req.body.regionId;
    Contact.findAll({
            where: {
                regionId: regionId
            }
        })
        .then(data => {
            res.status(200).json({
                msg: 'Contactos por región',
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'ID erróneo o región inexistente',
                error: err
            });
        })
}

exports.getContactsByCompany = (req, res, next) => {
    const companyId = req.body.companyId;
    Contact.findAll({
            where: {
                companyId: companyId
            }
        })
        .then(data => {
            res.status(200).json({
                msg: 'Contactos por companía',
                data: data
            })
        })
        .catch(err => {
            res.status(400).json('ID erróneo o compania inexistente.')
        })
}

exports.getContactsByCity = (req, res, next) => {
    const cityId = req.body.cityId;
    Contact.findAll({
            where: {
                cityId: cityId
            }
        })
        .then(data => {
            res.status(200).json({
                msg: 'Contactos por ciudad',
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'ID erróneo o ciudad inexistente',
                error: err
            });
        })
}

exports.getContactsByCountry = (req, res, next) => {
    const countryId = req.body.countryId;
    Contact.findAll({
            where: {
                countryId: countryId
            }
        })
        .then(data => {
            res.status(200).json({
                msg: 'Contactos por pais',
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'ID erróneo o pais inexistente',
                error: err
            });
        })
}