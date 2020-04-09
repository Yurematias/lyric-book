const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const {name, artist} = req.body; 
        if (await musicAlreadyExists({ name, artist })) {
            res.sendStatus(403);
        } else {
            await connection('user_musics').insert({ ...req.body });
            res.sendStatus(200);
        }
    },
    async list(req, res) {

    }
};

// return true if the user already saved the music
async function musicAlreadyExists(music) {

}