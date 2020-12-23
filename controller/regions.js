const Region = require('../models/region');

const Country = require('../models/country');

const City = require('../models/city');

exports.postNewRegion = (req, res, next) => {
    const regionName = req.body.regionName;
    Region.create({
            name: regionName
        })
        .then(data => {
            res.status(200).json({
                msg: 'Región creada',
                region: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                error: err
            })
        })
}

exports.postNewCountry = (req, res, next) => {
    const regionId = parseInt(req.body.regionId);
    const countryName = req.body.countryName;
    Country.create({
            name: countryName,
            regionId: regionId
        })
        .then(data => {
            res.status(200).json({
                msg: 'Pais creado',
                region: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                error: err
            })
        })
}

exports.postNewCity = (req, res, next) => {
    const countryId = parseInt(req.body.countryId);
    const cityName = req.body.cityName;
    City.create({
            name: cityName,
            countryId: countryId
        })
        .then(data => {
            res.status(200).json({
                msg: 'Ciudad creada',
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                data: err
            })
        })
}

exports.allRegions = (req, res, next) => {
    Region.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        .then(data => {
            //console.log(JSON.stringify(data, null, 2));
            res.status(200).render('home', {
                title: 'Region/Ciudad',
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                msg: 'Ocurrió un error, intente mas tarde.',
                data: err
            })
        })
}