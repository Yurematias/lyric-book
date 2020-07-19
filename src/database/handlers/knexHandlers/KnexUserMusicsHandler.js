const UserMusicsHandler = require('../AbstractUserMusicsHandler');

module.exports = class KnexUserMusicsHandler extends UserMusicsHandler {
    
    /**
     * Handle object to manipulate the user_musics table of the database
     * 
     * @param {Object} connection the connection object 
     */
    constructor(connection) {
        super();
        if (connection) {
            this.connection = connection;
        } else {
            throw new Error('missing parameters');
        }
    }
    /**
     * insert a new register in the user_musics table of the database
     * 
     * @param {String} musicId  The id of the music that will be inserted in user_musics table.
     * @param {String} userId   The id of the user that will be inserted in user_musics table. 
     */
    async insert(musicId, userId) {
        if (musicId && userId) {
            await this.connection('user_musics').insert({
                user_id: userId,
                music_id: musicId
            });
        } else {
            throw new Error('missing arguments in parameters');
        }
    }
    /**
     * Select all registers from user_musics table
     * 
     * @returns {Object} Return all of the user_musics table registers
     */
    async selectAll() {
        return await this.connection('user_musics')
            .join('users', 'users.id', '=', 'user_musics.user_id')
            .join('musics', 'musics.id', '=', 'user_musics.music_id')
            .select(['users.name as user_name', 'musics.name as music_name', 'musics.artist']);
    }
    /**
     * Select a only music in the user_musics table
     * 
     * @param {String} musicId  The id of the music that will be searched in user_musics table.
     * @param {String} userId   The id of the user that will be searched in user_musics table. 
     * 
     * @returns {Object} Return one of the user_musics table registers
     */
    async selectMusic(musicId, userId) {
        if (musicId && userId) {
            return await this.connection('user_musics')
                .where('music_id', musicId)
                .andWhere('user_id', userId)
                .select('*')
                .first();
        } else {
            throw new Error('missing arguments in parameters');
        }
    }
    /**
     * Delete a specific music of the user_musics table
     * 
     * @param {String} musicId The id of the music that will be deleted of the user_musics table.
     */
    async deleteMusic(musicId) {
        await this.connection('user_musics')
            .where('music_id', musicId)
            .delete();
    }
    async selectMusicsFromUser(userId) {
        return await this.connection('user_musics')
            .join('musics', 'musics.id', 'user_musics.music_id')
            .join('users', 'users.id', '=', 'user_musics.user_id')
            .where('user_id', userId)
            .select('users.name as owner',
                'musics.name as music_name', 
                'musics.artist', 
                'musics.lyrics', 
                'musics.id'
            );
    }
}