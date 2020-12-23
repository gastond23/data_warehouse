const Company = require('../models/company');

exports.getAllCompanies = async function (req, res, next) {
    await Company.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        .then(data => {
            //console.log(JSON.stringify(data, null, 2));
            res.status(200).render('home', {
                title: 'Companías',
                msg: 'Companías',
                data: data
            })
        })
        .catch(err => {
            console.log(err);
        });
}