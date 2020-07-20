const KnexUserHandler = require('../database/handlers/knexHandlers/KnexUserHandler');
const connection = require('../database/connection');
const databaseHandler = new KnexUserHandler(connection);

module.exports = {
    async create(req, res) {
        const { password, email } = req.body;
        const user = await databaseHandler.selectUser(password, email);
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(400).json({ error: 'No user found' });
        }
    }
}