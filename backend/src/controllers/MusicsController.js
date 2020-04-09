const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const music = { ...req.body, id};
        if (await musicAlreadyExists(music)) {
            res.sendStatus(403);
        } else {
            await connection('musics').insert(music); 
            res.sendStatus(200);
        }

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

async function musicAlreadyExists(music) {
    let nameInstance = await connection('musics')
        .where('name', music.name)
        .select('name')
        .first();

    let artistInstance = await connection('musics')
        .where('artist', music.artist)
        .select('artist')
        .first();

    return nameInstance && artistInstance;
}