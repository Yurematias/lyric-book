const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const musicId = req.body.musicId;
        const userId = req.headers.authorization;

        if (!musicId) {
            console.log('MUSICID UNDEFINED');
        }

        if (!userId) {
            console.log('USERID UNDEFINED');
        }

        if (await musicAlreadyExists(musicId, userId)) {
            res.sendStatus(409);
        } else {
            try {
                await connection('user_musics').insert({
                    user_id: userId,
                    music_id: musicId
                });
                res.sendStatus(201);
            } catch (error) {
                res.sendStatus(400);
            }
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
            res.status(404).json({ error: 'Does not have any register in the database' });
        }
    },
    async delete(req, res) {
        const musicId = req.params.music_id;
        const userId = req.headers.authorization;

        const musicToDelete = await connection('user_musics')
            .where('music_id', musicId)
            .andWhere('user_id', userId)
            .select('*')
            .first();

        if (musicToDelete) {
            await connection('user_musics')
                .where('music_id', musicId)
                .delete();
            res.sendStatus(204);
        } else {
            res.status(400).json('does not have any music with this parameters');
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