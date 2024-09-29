const db = require('../db_config');

const Homework = {
    assign: async (user_id, title, due_date) => {
        const result = await db.query(
            'INSERT INTO homework (user_id, title, due_date) VALUES ($1, $2, $3) RETURNING *',
            [user_id, title, due_date]
        );
        return result.rows[0];
    },
};

module.exports = Homework;
