const {
    networkInterfaces
} = require('os');
const Contact = require('../models/contact');

exports.postNewContact = (req, res, next) => {
    const newName = req.body.name;
    const newEmail = req.body.email;
    const newPhone = req.body.phone;
    const newImg = req.body.img;
    req.user.createContact({
            name: newName,
            email: newEmail,
            phone: newPhone,
            img: newImg
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
    Contact.findAll()
        .then(contacts => {
            res.status(200).json({
                msg: 'Lista contactos',
                contacts: contacts
            });
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
    Contact.findByPk(contactId)
        .then(contact => {
            contact.name = newName;
            contact.email = newEmail;
            contact.phone = newPhone;
            contact.img = newImg;
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

exports.getContactByRegion = (req, res, next) => {
    
}