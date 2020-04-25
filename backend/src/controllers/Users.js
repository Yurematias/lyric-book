const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = {...req.body, id };
        await connection('users').insert(dataToInsert);
        res.sendStatus(201);
    },
    async list(req, res) {
        const users = await connection('users').select('*');
        if (users) {
            res.json(users);
        } else {
            return res.status(404).json({ error: 'No users found' });
        }
    }
}