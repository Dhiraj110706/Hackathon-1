const db = require('../db_config');

const User = {
    create: async (username, email, password) => {
        const result = await db.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, password]
        );
        return result.rows[0];
    },
    findByEmail: async (email) => {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    },
};

module.exports = User;
