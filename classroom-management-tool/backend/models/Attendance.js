const db = require('../db_config');

const Attendance = {
    record: async (user_id, date, status) => {
        const result = await db.query(
            'INSERT INTO attendance (user_id, date, status) VALUES ($1, $2, $3) RETURNING *',
            [user_id, date, status]
        );
        return result.rows[0];
    },
};

module.exports = Attendance;
