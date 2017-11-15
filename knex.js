const knex = require('knex');
require('dotenv').config({path: './.env'});
const mysqlDatabase = knex({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB_NAME,
    }
});
module.exports = mysqlDatabase;