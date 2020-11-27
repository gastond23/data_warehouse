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