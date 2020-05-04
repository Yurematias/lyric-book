const MusicHandler = require('../AbstractMusicHandler');
const connection = require('../../connection');

module.exports = class KnexMusicHandler extends MusicHandler {
    async insert(music) {
        if (music.name && music.artist && music.lyrics) {
            await connection('musics').insert(music);
        } else {
            throw new Error('Incorrect body type received');
        }
    }
    async selectId(musicName, artist) {
        if (musicName && artist) {
            const response = await connection('musics')
                .where('name', musicName)
                .andWhere('artist', artist)
                .select('id')
                .first();
            return response;
        } else {
            throw new Error('invalid arguments received');
        }
    }
    async selectAll() {
        return await connection('musics').select('*');
    }
}
