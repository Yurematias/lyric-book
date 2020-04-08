const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = { ...req.body, id}
        console.log(dataToInsert);
        await connection('users').insert(dataToInsert);
        res.sendStatus(200);
    },
    async list(req, res) {

    }
}