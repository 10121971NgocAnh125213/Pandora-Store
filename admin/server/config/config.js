const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@09082003",
    database: "pandora_shop"
});

module.exports = db;