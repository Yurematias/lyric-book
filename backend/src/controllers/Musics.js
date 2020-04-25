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
    // busca uma música no bacno de dados e retorna o id caso encontre
    async search(req, res) {
        const { artist, name } = req.query;
        const musicSearched = await connection('musics')
            .where('artist', artist)
            .andWhere('name', name)
            .select('id')
            .first();
        if (musicSearched) {
            res.status(200).json(musicSearched);
        } else {
            res.status(400).json({ error: 'no music found'});
        }
    },
    async list(req, res) {
        const musics = await connection('musics').select('*');
        if (musics) {
            res.status(200).json(musics);
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