const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { password, email } = req.body;
        const user = await connection('users')
            .where('password', password)
            .andWhere('email', email)
            .select('name', 'id')
            .first();
        if (user) {
            res.status(201).json(user);
        } else {
            res.status(400).json({ error: 'No user found' });
        }
    }
}