const { Pool } = require('pg');

const pool = new Pool({
    user: 'dhiraj',
    host: 'localhost',
    database: 'classroom_management_tool',
    password: '1107',
    port: 5432,
});

module.exports = pool;
