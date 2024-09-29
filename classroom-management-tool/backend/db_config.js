const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'lodalhost',
    database: 'classroom_management',
    password: '1107',
    port: 5432,
});

module.exports = pool;
