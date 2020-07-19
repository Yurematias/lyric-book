
exports.up = function(knex) {
    return knex.schema.createTable('user_musics', table => {
        table.increments();
        table.string('user_id');
        table.string('music_id');
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('music_id').references('id').inTable('musics');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_musics');
};
