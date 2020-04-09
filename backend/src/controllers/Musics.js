const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX'); 
        const music = { ...req.body, id };
        const musicSearched = await musicAlreadyExists(music);

        if (musicSearched) {
            res.status(403).json(musicSearched);
        } else {
            await connection('musics').insert(music); 
            res.sendStatus(200);
        }
    },
    async list(req, res) {
        const musics = await connection('musics').select('*');
        if (musics) {
            res.json(musics);
        } else {
            res.sendStatus(404);
        }
    }
}

async function musicAlreadyExists(music) {
    const musicId = await connection('musics')
        .where('name', music.name)
        .andWhere('artist', music.artist)
        .select('id')
        .first();
    return musicId || false;
}