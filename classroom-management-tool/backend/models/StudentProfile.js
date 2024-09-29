const db = require('../db_config');

const StudentProfile = {
    create: async (user_id, bio, profile_picture) => {
        const result = await db.query(
            'INSERT INTO student_profiles (user_id, bio, profile_picture) VALUES ($1, $2, $3) RETURNING *',
            [user_id, bio, profile_picture]
        );
        return result.rows[0];
    },
};

module.exports = StudentProfile;
