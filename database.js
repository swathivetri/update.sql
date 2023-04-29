const mysql = require('mysql2');

const pool = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Swa8667414579'
});

module.exports = pool.promise();