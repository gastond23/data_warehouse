const jwt = require('jsonwebtoken');

const { config } = require('../config/config');

const firma = config.secret_key;

module.exports = {
    jwt,
    firma
}