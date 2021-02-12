const Contact = require('../models/contact');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.postNewContact = (req, res, next) => {
    console.log(req.file);
    let newImg;
    if (req.file == undefined) {
        newImg = 'avatar.jpg';
    } else {
        newImg = req.file.filename;
    }
    const newName = req.body.name;
    const newLastname = req.body.lastname;
    const newEmail = req.body.email;
    const newPhone = req.body.phone;
    const newAdress = req.body.adress;
    const newCompany = req.body.companyId;
    const newCity = req.body.cityId;
    const newPosition = req.body.position;
    const newInterest = req.body.interest;
    req.user.createContact({
            name: newName,
            lastname: newLastname,
            email: newEmail,
            phone: newPhone,
            img: newImg,
            adress: newAdress,
            companyId: newCompany,
            cityId: newCity,
            position: newPosition,
            interest: newInterest
        })
        .then(data => {
            res.status(200).redirect('http://localhost:3000/contactos')
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                data: err,
                status: 400
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
                data: contacts,
                status: 200
            })
        })
        .catch(err => {
            res.status(400).render('home', {
                title: 'Contactos',
                msg: 'Ocurrió un error, intente mas tarde.',
                data: err,
                status: 400
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

exports.contactCreateForm = (req, res, next) => {
    res.status(200).render('form-contact', {
        title: 'Crear Contacto',
        msg: 'Form Create Contact'
    })
}

exports.busquedaContactos = (req, res, next) => {
    const search = req.body.search;
    let busqueda = [];
    busqueda.push(search)
    Contact.findAll({
            where: {
                [Op.or]: [{
                    name: busqueda
                }, {
                    lastname: busqueda
                }]
            },
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
                data: contacts,
                status: 200
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400).render('home', {
                title: 'Contactos',
                msg: 'Ocurrió un error, intente mas tarde.',
                data: err,
                status: 400
            });
        })
}