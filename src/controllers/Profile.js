const connection = require('../database/connection');
const KnexUserMusicsHandler = require('../database/handlers/knexHandlers/KnexUserMusicsHandler');

const databaseHandler = new KnexUserMusicsHandler(connection);
module.exports = {
    async list(req, res) {
        const userId = req.headers.authorization;
        const musics = await databaseHandler.selectMusicsFromUser(userId);
        if (musics) {
            res.status(200).json(musics);
        } else {
            res.sendStatus(404);
        }
    }
}