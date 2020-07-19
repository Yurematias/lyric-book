const crypto = require('crypto');
const KnexUserHandler = require('../database/handlers/knexHandlers/KnexUserHandler');
const connection = require('../database/connection');

const databaseHandler = new KnexUserHandler(connection); 

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX');
        const dataToInsert = {...req.body, id };

        if (await didUserAlreadyExists(req.body.email)) {
            res.status(409).json({ error: 'this email already have an account' });
            console.log('o usuário com este email já existe no banco');
        } else {
            try {
                await databaseHandler.insert(dataToInsert);
                res.sendStatus(201);
            } catch (error) {
                console.log('erro ao inserir o usuário no banco de dados');
            }
        }
    },
    async list(req, res) {
        const users = await databaseHandler.selectAll();
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set("x-total-count", 5);
        if (users) {
            return res.json(users);
        } else {
            return res.status(404).json({ error: 'No users found' });
        }
    }
}

async function didUserAlreadyExists(email) {
    let response;
    try {
        response = await databaseHandler.selectUserByEmail(email);
    } catch (error) {}
    return response;
}