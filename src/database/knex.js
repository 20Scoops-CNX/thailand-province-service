const knex = require('knex');
const mysqlDatabase = knex({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB_NAME,
        port: process.env.MYSQL_PORT
    }
});
module.exports = mysqlDatabase;