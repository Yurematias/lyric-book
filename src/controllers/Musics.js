const crypto = require('crypto');
const KnexMusicHandler = require('../database/handlers/knexHandlers/KnexMusicHandler');
const connection = require('../database/connection');

const databaseHandler = new KnexMusicHandler(connection);

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const music = {...req.body, id };
        const musicSearched = await musicAlreadyExists(music);

        if (musicSearched) {
            res.sendStatus(409);
        } else {
            await databaseHandler.insert(music);
            res.sendStatus(201);
        }
    },
    async search(req, res) {
        const { name, artist } = req.query;
        try {
            const response = await databaseHandler.selectId(name, artist);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ error: 'no music found' });
        }
    },
    async list(req, res) {
        const musics = await databaseHandler.selectAll();
        res.header('Access-Control-Expose-Headers', 'X-Total-Count');
        res.set("x-total-count", 5);
        if (musics) {
            res.status(200).json(musics);
        } else {
            res.sendStatus(404);
        }
    }
}
async function musicAlreadyExists(music) {
    const musicId = await databaseHandler.selectId(music.name, music.artist);
    return musicId || false;
}