const MusicHandler = require('../AbstractMusicHandler');

module.exports = class KnexMusicHandler extends MusicHandler {
    /**
     * Handle object to manipulate with the musics table data
     * 
     * @param {Object} connection the connection object 
     */
    constructor(connection) {
        super();
        if (connection) {
            this.connection = connection;
        } else {
            throw new Error('missing argument');
        }
    }
    /**
     * method to insert a music in the database
     * 
     * @param {Object} music the object with the music data to be inserted in the musics table
     */
    async insert(music) {
        if (music.name && music.artist && music.lyrics) {
            await this.connection('musics').insert(music);
        } else {
            throw new Error('Incorrect body type received');
        }
    }
    /**
     * method to get the id of a specific music of the database
     * 
     * @param {String} musicName the name of the music that will be used to search the id 
     * @param {String} artist the name of the music that will be used to search the id 
     * 
     * @returns {Object} returns the id of the music found
     */
    async selectId(musicName, artist) {
        if (musicName && artist) {
            return await this.connection('musics')
                .where('name', musicName)
                .andWhere('artist', artist)
                .select('id')
                .first();
        } else {
            throw new Error('invalid arguments received');
        }
    }
    /**
     * method to select all the registers of the music table from the database
     */
    async selectAll() {
        return await this.connection('musics').select('*');
    }
}
