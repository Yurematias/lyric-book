const connection = require('../database/connection');

module.exports = {
    async list(req, res) {
        const userId = req.headers.authorization;
        const musics = await connection('user_musics')
            .join('musics', 'musics.id', 'user_musics.music_id')
            .join('users', 'users.id', '=', 'user_musics.user_id')
            .where('user_id', userId)
            .select('users.name as owner','musics.name as music_name', 'musics.artist', 'musics.lyrics');
        if (musics) {
            res.status(200).json(musics);
        } else {
            res.status(404);
        }
    }
}