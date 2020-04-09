const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const {musicId, userId} = req.body; 
        if (await musicAlreadyExists(musicId, userId)) {
            res.sendStatus(403);
        } else {
            await connection('user_musics').insert({ 
                user_id: userId,
                music_id: musicId
            });
            res.sendStatus(200);
        }
    },
    async list(req, res) {

    }
};

// return true if the user already saved the music
async function musicAlreadyExists(musicId, userId) {
    const instanceExists = await connection('user_musics')
        .whereIn('music_id', musicId)
        .andWhere('user_id', userId)
        .select('*')
        .first();
    console.log('intancia: ', instanceExists ? true : false);
    return instanceExists ? true : false;
}