const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const musicId = req.body.musicId; 
        const userId = req.headers.authorization;

        if (await musicAlreadyExists(musicId, userId)) {
            res.status(403);
        } else {
            await connection('user_musics').insert({ 
                user_id: userId,
                music_id: musicId
            });
            res.status(200);
        }
    },
    async list(req, res) {
        const userMusics = await connection('user_musics') 
            .join('users', 'users.id', '=', 'user_musics.user_id')
            .join('musics', 'musics.id', '=', 'user_musics.music_id')
            .select(['users.name as user_name', 'musics.name as music_name', 'musics.artist']);

        if (userMusics) {
            res.json(userMusics);
        } else {
            res.sendStatus(404);
        }
    }
};

// return true if the user already saved the music
async function musicAlreadyExists(musicId, userId) {
    const instanceExists = await connection('user_musics')
        .where('music_id', musicId)
        .andWhere('user_id', userId)
        .select('*')
        .first();
    return instanceExists ? true : false;
}