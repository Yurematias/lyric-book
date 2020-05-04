const AbstractUserHandler = require('../AbstractUserHandler');
const connection = require('../../connection');

module.exports = class KnexUserHandler extends AbstractUserHandler {
    async insert(user) {
        await connection('users').insert(user);
    }
    async selectAll() {
        return await connection('users').select('*');
    }
    async selectUserByEmail(email) {
        return await connection('users')
            .where('email', email)
            .select('*')
            .first();
    }
}