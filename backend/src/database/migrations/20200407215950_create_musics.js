
exports.up = function(knex) {
    return knex.schema.createTable('musics', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('artist').notNullable();
        table.string('lyrics').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('musics');
};
