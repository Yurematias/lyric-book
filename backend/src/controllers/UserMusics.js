const KnexUserMusicsHandler = require('../database/handlers/knexHandlers/KnexUserMusicsHandler');

const connection = require('../database/connection');

const databaseHandler = new KnexUserMusicsHandler(connection);

module.exports = {
    async create(req, res) {
        const musicId = req.body.musicId;
        const userId = req.headers.authorization;

        if (await didMusicAlreadyExists(musicId, userId)) {
            res.sendStatus(409);
        } else {
            try {
                await databaseHandler.insert(musicId, userId);
                res.sendStatus(201);
            } catch (error) {
                res.sendStatus(400);
            }
        }
    },
    async list(req, res) {
        const userMusics = await databaseHandler.selectAll();

        if (userMusics) {
            res.json(userMusics);
        } else {
            res.status(404).json({ error: 'Does not have any register in the database' });
        }
    },
    async delete(req, res) {
        const musicId = req.params.music_id;
        const userId = req.headers.authorization;

        const musicToDelete = await databaseHandler.selectMusic(musicId, userId);
        
        if (musicToDelete) {
            await databaseHandler.deleteMusic(musicId);
            res.sendStatus(204);
        } else {
            res.status(400).json('does not have any music with this parameters');
        }
    }
};

// return true if the user already saved the music
async function didMusicAlreadyExists(musicId, userId) {
    const instanceExists = await databaseHandler.selectMusic(musicId, userId);
    return instanceExists ? true : false;
}