const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = { ...req.body, id}
        try {
            await connection('users').insert(dataToInsert);
        } catch (error) {
            console.log(error);
        }
        res.sendStatus(200);
    },
    async list(req, res) {
        const users = await connection('users').select('*');
        console.log('lista:\n', users);
        res.json(users);
    }
}