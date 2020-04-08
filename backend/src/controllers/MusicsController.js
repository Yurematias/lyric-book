const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = { ...req.body, id};
        await connection('musics').insert(dataToInsert); 
        res.sendStatus(200);
    },
    async list(req, res) {
        const musics = await connection('musics').select('*');
        if (!musics) {
            res.sendStatus(404);
        } else {
            res.json(musics);
        }
    }
}