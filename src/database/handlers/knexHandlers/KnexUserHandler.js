const AbstractUserHandler = require('../AbstractUserHandler');

module.exports = class KnexUserHandler extends AbstractUserHandler {
    constructor(connection) {
        super();
        if (connection) {
            this.connection = connection;
        } else {
            throw new Error('mussing parameter')
        }
    }
    async insert(user) {
        await this.connection('users').insert(user);
    }
    async selectAll() {
        return await this.connection('users').select('*');
    }
    async selectUserByEmail(email) {
        return await this.connection('users')
            .where('email', email)
            .select('*')
            .first();
    }
    async selectUser(password, email) {
        return await this.connection('users')
            .where('password', password)
            .andWhere('email', email)
            .select('name', 'id')
            .first();
    }
}