const Contact = require('../models/contact');
const Company = require('../models/company');
const Region = require('../models/region');
const Country = require('../models/country');
const City = require('../models/city');

exports.busquedaNombre = (req, res, next) => {
    const search = req.body.search;
    Contact.findAll({
            where: {
                name: search
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then((contacts) => {
            if (contacts.length > 0) {
                console.log(JSON.stringify(contacts, null, 2));
                res.status(200).render('home', {
                    title: 'Contactos',
                    msg: 'Contactos',
                    data: contacts,
                    status: 200
                })
            } else {
                next();
            }
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

exports.busquedaApellido = (req, res, next) => {
    const search = req.body.search;
    Contact.findAll({
            where: {
                lastname: search
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then((contacts) => {
            if (contacts.length > 0) {
                console.log(JSON.stringify(contacts, null, 2));
                res.status(200).render('home', {
                    title: 'Contactos',
                    msg: 'Contactos',
                    data: contacts,
                    status: 200
                })
            } else {
                next();
            }
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

exports.busquedaMail = (req, res, next) => {
    const search = req.body.search;
    Contact.findAll({
            where: {
                email: search
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then((contacts) => {
            if (contacts.length > 0) {
                console.log(JSON.stringify(contacts, null, 2));
                res.status(200).render('home', {
                    title: 'Contactos',
                    msg: 'Contactos',
                    data: contacts,
                    status: 200
                })
            } else {
                next();
            }
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

exports.busquedaTelefono = (req, res, next) => {
    const search = req.body.search;
    Contact.findAll({
            where: {
                phone: search
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then((contacts) => {
            if (contacts.length > 0) {
                console.log(JSON.stringify(contacts, null, 2));
                res.status(200).render('home', {
                    title: 'Contactos',
                    msg: 'Contactos',
                    data: contacts,
                    status: 200
                })
            } else {
                next();
            }
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

exports.busquedaPuesto = (req, res, next) => {
    const search = req.body.search;
    Contact.findAll({
            where: {
                position: search
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then((contacts) => {
            if (contacts.length > 0) {
                console.log(JSON.stringify(contacts, null, 2));
                res.status(200).render('home', {
                    title: 'Contactos',
                    msg: 'Contactos',
                    data: contacts,
                    status: 200
                })
            } else {
                next();
            }
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

exports.busquedaInteres = (req, res, next) => {
    const search = req.body.search;
    Contact.findAll({
            where: {
                interest: search
            },
            include: {
                all: true,
                nested: true
            }
        })
        .then((contacts) => {
            if (contacts.length > 0) {
                console.log(JSON.stringify(contacts, null, 2));
                res.status(200).render('home', {
                    title: 'Contactos',
                    msg: 'Contactos',
                    data: contacts,
                    status: 200
                })
            } else {
                next();
            }
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

exports.busquedaCompania = (req, res, next) => {
    const search = req.body.search;
    Company.findAll({
            where: {
                name: search
            }
        })
        .then(company => {
            if (company.length > 0) {
                const companyId = company[0].dataValues.id;
                Contact.findAll({
                        where: {
                            companyId: companyId
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
                        res.status(400).render('home', {
                            title: 'Contactos',
                            msg: 'Ocurrió un error, intente mas tarde.',
                            data: err,
                            status: 400
                        });
                    })
            } else {
                next();
            }
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

exports.busquedaRegión = (req, res, next) => {
    const search = req.body.search;
    Region.findAll({
            where: {
                name: search
            }
        })
        .then(region => {
            if (region.length > 0) {
                const regionId = region[0].dataValues.id;
                console.log(regionId);
                Contact.findAll({
                        where: {
                            regionId: regionId
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
                        res.status(400).render('home', {
                            title: 'Contactos',
                            msg: 'Ocurrió un error, intente mas tarde.',
                            data: err,
                            status: 400
                        });
                    })
            } else {
                next();
            }
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

exports.busquedaCiudad = (req, res, next) => {
    const search = req.body.search;
    City.findAll({
            where: {
                name: search
            }
        })
        .then(city => {
            if (city.length > 0) {
                const cityId = city[0].dataValues.id;
                Contact.findAll({
                        where: {
                            cityId: cityId
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
                        res.status(400).render('home', {
                            title: 'Contactos',
                            msg: 'Ocurrió un error, intente mas tarde.',
                            data: err,
                            status: 400
                        });
                    })
            } else {
                next();
            }
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

exports.busquedaCountry = (req, res, next) => {
    const search = req.body.search;
    Country.findAll({
            where: {
                name: search
            }
        })
        .then(country => {
            if (country.length > 0) {
                const countryId = country[0].dataValues.id;
                Contact.findAll({
                        where: {
                            countryId: countryId
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
                        res.status(400).render('home', {
                            title: 'Contactos',
                            msg: 'Ocurrió un error, intente mas tarde.',
                            data: err,
                            status: 400
                        });
                    })
            } else {
                next();
            }
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