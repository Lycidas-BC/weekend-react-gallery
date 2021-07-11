// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

// Listener on pool
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;